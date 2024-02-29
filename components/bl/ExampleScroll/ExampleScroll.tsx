'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import lcs from './ExampleScroll.module.css'
import cns from 'classnames'

const preview = '/images/1.jpg'

export const ScrollAnimation = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  })

  const bottomShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ['-100%', '0%']
  )

  const imageValue = useTransform(scrollYProgress, [0, 1], ['-100%', '0%'])
  const topShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ['-25%', '100%']
  )

  return (
    <section className={cns(lcs.scrollContainer, lcs.section)} ref={containerRef}>
      <div className={lcs.copy}>
        <h2>Lorem ipsum dolor sit amet</h2>
      </div>
      <div className={lcs.imgContainer}>
        <motion.div className={lcs.imgInner} style={{ translateX: imageValue }}>
          <motion.div
            className={lcs.bottomShadow}
            style={{ translateX: bottomShadowValue }}
          />
          <Image
            src={preview}
            className={lcs.img}
            height="400"
            width="400"
            alt="thumbnail"
            priority={true}
          />
          <motion.div
            className={lcs.topShadow}
            style={{ translateX: topShadowValue }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default function ExampleScroll() {
  return (
    <div>
      <div className={lcs.topSection}>
        <h1>Scroll down</h1>
      </div>
      <ScrollAnimation />
    </div>
  )
}
