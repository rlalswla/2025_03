"use client"

import { useEffect, useState } from "react"

interface ParallaxBackgroundProps {
  className?: string
  speed?: number
}

export function ParallaxBackground({ className, speed = 0.3 }: ParallaxBackgroundProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: "transform 0.1s ease-out",
      }}
    />
  )
}

