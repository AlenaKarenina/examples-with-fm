'use client'
import { useRef, FC } from 'react'
import lcs from './MarqueeText.module.css'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap
} from 'framer-motion'

interface MarqueeProps {
  children: string
  baseVelocity: number
}

const ParallaxText: FC<MarqueeProps> = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0)

  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)

  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className={lcs.parallax}>
      <motion.div className={lcs.scroller} style={{ x }}>
        {Array.from({ length: 6 }).map((item, i) => {
          return (
            <span key={i}>{children} </span>
          )
        })}
      </motion.div>
    </div>
  )
}

export const MarqueeText = () => {
  return (
    <section className={lcs.el}>
      <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
      <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
    </section>
  )
}
