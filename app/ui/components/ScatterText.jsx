'use client'

import { animate, hover } from "motion"
import { splitText } from "motion-plus"
import { useMotionValue } from "motion/react"
import { useEffect, useRef } from "react"


export default function ScatterText() {
  const containerRef = useRef(null)
  const velocityX = useMotionValue(0)
  const velocityY = useMotionValue(0)
  const prevEvent = useRef(0)

  useEffect(() => {
    if (!containerRef.current) return

    const { chars } = splitText(containerRef.current.querySelector(".scatter"))

    const handlePointerMove = (event) => {
      const now = performance.now()
      const timeSinceLastEvent = (now - prevEvent.current) / 1000 // seconds
      prevEvent.current = now
      velocityX.set(event.movementX / timeSinceLastEvent)
      velocityY.set(event.movementY / timeSinceLastEvent)
    }

    document.addEventListener("pointermove", handlePointerMove)

    hover(chars, (element) => {
      // Calculate the speed of the pointer movement
      // and use that to calculate the distance the character should move
      const speed = Math.sqrt(
        velocityX.get() * velocityX.get() +
        velocityY.get() * velocityY.get()
      )
      const angle = Math.atan2(velocityY.get(), velocityX.get())
      const distance = speed * 0.1

      animate(
        element,
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        },
        { type: "spring", stiffness: 100, damping: 50 }
      )
    })

    return () => {
      document.removeEventListener("pointermove", handlePointerMove)
    }
  }, [])

  return (
    <div className="flex items-center justify-center flex-col gap-10">

      <p className="text-white text-center">Juntos, podemos quebrar muitas barreiras (passe o mouse pelo texto abaixo)</p>

      <div className="" ref={containerRef}>

        <p className="scatter text-xl sm:text-3xl text-purple-400">Quebre a barreira entre você e o futuro!</p>
      </div>
    </div>
  )
}
