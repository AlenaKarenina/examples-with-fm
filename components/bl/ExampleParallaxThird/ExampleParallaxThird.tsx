'use client'
import React from 'react'
import {
  useScroll,
  motion,
  useTransform
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import lcs from './ExampleParallaxThird.module.css'

const ExampleParallaxThird = () => {

  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 300], [0, 200])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false
  })

  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0
    },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 100
    }
  }

  return (
    <div className={lcs.el}>
      <motion.div className={lcs.box} style={{ y: y1, x: -50 }} />
      <motion.div
        className={lcs.box}
        style={{ y: y2, x: 50, background: 'salmon' }}
      />
      <div style={{ position: 'fixed', top: 0, left: 0 }}>
        {'is in view? ' + inView}
      </div>
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
        className={lcs.magic}
      />
    </div>
  );
}

export default ExampleParallaxThird
