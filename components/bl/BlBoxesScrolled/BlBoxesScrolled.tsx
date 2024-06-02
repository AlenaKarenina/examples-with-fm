'use client'
import cns from 'classnames'
import lcs from './BlBoxesScrolled.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from "next/image"

const preview = '/images/3.jpg'

export function Box() {
  const ref = useRef<any>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5])

  return <motion.div
    ref={ref}
    className={lcs.box}
    style={{
      scale,
      transitionDuration: '0.5s',
      transitionProperty: 'transform',
      transitionTimingFunction: 'linear'
    }}
  >
    <Image
      src={preview}
      alt='image'
      height={800}
      width={800}
      className={lcs.image}
      draggable={false}
      priority={true}
    />
  </motion.div>
}

export default function BlBoxesScrolled() {
  return (
    <div className={lcs.el}>
      {Array.from({ length: 6 }).map((item, i) => {
        return (
          <Box key={i}/>
        )
      })}
    </div>
  )
}
