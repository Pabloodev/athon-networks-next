'use client'; // se estiver usando App Router do Next.js

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const maxParticleCount = 1000;
const r = 800;
const rHalf = r / 2;

const ThreeParticles = () => {
  const containerRef = useRef();


  useEffect(() => {
    let camera, scene, renderer, group;
    let particlesData = [];
    let positions, colors, particles, pointCloud, particlePositions, linesMesh;

    let particleCount = 500;

    const effectController = {
      showDots: true,
      showLines: true,
      minDistance: 150,
      limitConnections: false,
      maxConnections: 20,
      particleCount: 500
    };


    const init = () => {
      
      const container = containerRef.current;

      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 4000);
      camera.position.z = 1750;

      const controls = new OrbitControls(camera, container);
      controls.minDistance = 1000;
      controls.maxDistance = 3000;

      scene = new THREE.Scene();
      group = new THREE.Group();
      scene.add(group);

      const helper = new THREE.BoxHelper(new THREE.Mesh(new THREE.BoxGeometry(r, r, r)));
      helper.material.color.setHex(0x474747);
      helper.material.blending = THREE.AdditiveBlending;
      helper.material.transparent = true;
      group.add(helper);

      const segments = maxParticleCount * maxParticleCount;
      positions = new Float32Array(segments * 3);
      colors = new Float32Array(segments * 3);

      const pMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 3,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: false
      });

      particles = new THREE.BufferGeometry();
      particlePositions = new Float32Array(maxParticleCount * 3);

      for (let i = 0; i < maxParticleCount; i++) {
        const x = Math.random() * r - r / 2;
        const y = Math.random() * r - r / 2;
        const z = Math.random() * r - r / 2;

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;

        particlesData.push({
          velocity: new THREE.Vector3(-1 + Math.random() * 2, -1 + Math.random() * 2, -1 + Math.random() * 2),
          numConnections: 0
        });
      }

      particles.setDrawRange(0, particleCount);
      particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3).setUsage(THREE.DynamicDrawUsage));
      pointCloud = new THREE.Points(particles, pMaterial);
      group.add(pointCloud);

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage));
      geometry.computeBoundingSphere();
      geometry.setDrawRange(0, 0);

      const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true
      });

      linesMesh = new THREE.LineSegments(geometry, material);
      group.add(linesMesh);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(animate);
      container.appendChild(renderer.domElement);


      window.addEventListener('resize', onWindowResize);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      let vertexpos = 0;
      let colorpos = 0;
      let numConnected = 0;

      for (let i = 0; i < particleCount; i++) particlesData[i].numConnections = 0;

      for (let i = 0; i < particleCount; i++) {
        const particleData = particlesData[i];
        particlePositions[i * 3] += particleData.velocity.x;
        particlePositions[i * 3 + 1] += particleData.velocity.y;
        particlePositions[i * 3 + 2] += particleData.velocity.z;

        // bounce back
        if (particlePositions[i * 3 + 1] < -rHalf || particlePositions[i * 3 + 1] > rHalf) particleData.velocity.y *= -1;
        if (particlePositions[i * 3] < -rHalf || particlePositions[i * 3] > rHalf) particleData.velocity.x *= -1;
        if (particlePositions[i * 3 + 2] < -rHalf || particlePositions[i * 3 + 2] > rHalf) particleData.velocity.z *= -1;

        if (effectController.limitConnections && particleData.numConnections >= effectController.maxConnections) continue;

        for (let j = i + 1; j < particleCount; j++) {
          const particleDataB = particlesData[j];
          if (effectController.limitConnections && particleDataB.numConnections >= effectController.maxConnections) continue;

          const dx = particlePositions[i * 3] - particlePositions[j * 3];
          const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
          const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < effectController.minDistance) {
            particleData.numConnections++;
            particleDataB.numConnections++;

            const alpha = 1.0 - dist / effectController.minDistance;

            positions[vertexpos++] = particlePositions[i * 3];
            positions[vertexpos++] = particlePositions[i * 3 + 1];
            positions[vertexpos++] = particlePositions[i * 3 + 2];

            positions[vertexpos++] = particlePositions[j * 3];
            positions[vertexpos++] = particlePositions[j * 3 + 1];
            positions[vertexpos++] = particlePositions[j * 3 + 2];

            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;

            numConnected++;
          }
        }
      }

      linesMesh.geometry.setDrawRange(0, numConnected * 2);
      linesMesh.geometry.attributes.position.needsUpdate = true;
      linesMesh.geometry.attributes.color.needsUpdate = true;

      pointCloud.geometry.attributes.position.needsUpdate = true;

      group.rotation.y = Date.now() * 0.001 * 0.1;
      renderer.render(scene, camera);

    };

    init();

    return () => {
      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }

    };
  }, []);

  return (
    <div className='flex items-center justify-center cursor-grab active:cursor-grabbing'>
      <div ref={containerRef} />
    </div>
  );
};

export default ThreeParticles;
