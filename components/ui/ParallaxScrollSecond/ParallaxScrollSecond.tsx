'use client'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import cn from 'classnames'
import lcs from './ParallaxScrollSecond.module.css'

export const ParallaxScrollSecond = ({
  images,
  className,
}: {
  images: string[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200])
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200])

  const third = Math.ceil(images.length / 3)

  const firstPart = images.slice(0, third)
  const secondPart = images.slice(third, 2 * third)
  const thirdPart = images.slice(2 * third)

  return (
    <div className={cn(lcs.el, className)}>
      <div className={lcs.grid}>
        <div className={lcs.column}>
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
            >
              <Image
                src={el}
                className={lcs.image}
                height="400"
                width="400"
                alt="thumbnail"
                priority={true}
              />
            </motion.div>
          ))}
        </div>
        <div className={lcs.column}>
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={"grid-2" + idx}
            >
              <Image
                src={el}
                className={lcs.image}
                height="400"
                width="400"
                alt="thumbnail"
                priority={true}
              />
            </motion.div>
          ))}
        </div>
        <div className={lcs.column}>
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={"grid-3" + idx}
            >
              <Image
                src={el}
                className={lcs.image}
                height="400"
                width="400"
                alt="thumbnail"
                priority={true}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
