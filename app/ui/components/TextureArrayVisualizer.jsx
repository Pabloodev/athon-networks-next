"use client"

// TextureArrayVisualizer.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { unzipSync } from "three/addons/libs/fflate.module.js";

const DIMENSIONS = {
  width: 256,
  height: 256,
  depth: 109,
};

const vertexPostProcess = `
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentPostProcess = `
precision highp sampler2DArray;
precision mediump float;
in vec2 vUv;
uniform sampler2DArray uTexture;
uniform int uDepth;
uniform float uIntensity;

void main() {
  float voxel = texture(uTexture, vec3(vUv, uDepth)).r;
  gl_FragColor.r = voxel * uIntensity;
}
`;

const vertexShader = `
uniform vec2 size;
out vec2 vUv;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vUv.xy = position.xy / size + 0.5;
  vUv.y = 1.0 - vUv.y;
}
`;

const fragmentShader = `
precision highp float;
precision highp int;
precision highp sampler2DArray;

uniform sampler2DArray diffuse;
in vec2 vUv;
uniform int depth;

void main() {
  vec4 color = texture(diffuse, vec3(vUv, depth));
  gl_FragColor = vec4(color.rrr * 1.5, 1.0);
}
`;

export default function TextureArrayVisualizer() {
  const containerRef = useRef();
  const meshRef = useRef();
  const rendererRef = useRef();
  const cameraRef = useRef();
  const renderTargetRef = useRef();
  const postProcessMaterialRef = useRef();
  const depthStepRef = useRef(0.4);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 70;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const postProcessScene = new THREE.Scene();
    const postProcessCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderTarget = new THREE.WebGLArrayRenderTarget(DIMENSIONS.width, DIMENSIONS.height, DIMENSIONS.depth);
    renderTarget.texture.format = THREE.RedFormat;
    renderTargetRef.current = renderTarget;

    const postProcessMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: null },
        uDepth: { value: 55 },
        uIntensity: { value: 1.0 },
      },
      vertexShader: vertexPostProcess.trim(),
      fragmentShader: fragmentPostProcess.trim(),
    });
    postProcessMaterialRef.current = postProcessMaterial;

    const screenQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), postProcessMaterial);
    postProcessScene.add(screenQuad);

    new THREE.FileLoader()
      .setResponseType("arraybuffer")
      .load("/head.zip", (data) => {
        const zip = unzipSync(new Uint8Array(data));
        const array = new Uint8Array(zip["head256x256x109"].buffer);

        const texture = new THREE.DataArrayTexture(array, DIMENSIONS.width, DIMENSIONS.height, DIMENSIONS.depth);
        texture.format = THREE.RedFormat;
        texture.needsUpdate = true;

        const geometry = new THREE.PlaneGeometry(50, 50);
        const material = new THREE.ShaderMaterial({
          uniforms: {
            diffuse: { value: renderTarget.texture },
            depth: { value: 55 },
            size: { value: new THREE.Vector2(50, 50) },
          },
          vertexShader: vertexShader.trim(),
          fragmentShader: fragmentShader.trim(),
        });

        const mesh = new THREE.Mesh(geometry, material);
        meshRef.current = mesh;
        scene.add(mesh);

        postProcessMaterial.uniforms.uTexture.value = texture;

        renderer.setAnimationLoop(() => {
          animate(mesh, postProcessMaterial, renderer, renderTarget, postProcessScene, postProcessCamera, scene, camera);
        });
      });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  const animate = (mesh, postMaterial, renderer, renderTarget, postScene, postCamera, scene, camera) => {
    let depth = mesh.material.uniforms["depth"].value;
    depth += depthStepRef.current;

    if (depth > 109.0 || depth < 0.0) {
      if (depth > 1.0) depth = 109.0 * 2.0 - depth;
      if (depth < 0.0) depth = -depth;
      depthStepRef.current = -depthStepRef.current;
    }

    mesh.material.uniforms["depth"].value = depth;
    postMaterial.uniforms.uDepth.value = Math.floor(depth);

    renderer.setRenderTarget(renderTarget, Math.floor(depth));
    renderer.render(postScene, postCamera);
    renderer.setRenderTarget(null);

    renderer.render(scene, camera);
  };

  return <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />;
}
