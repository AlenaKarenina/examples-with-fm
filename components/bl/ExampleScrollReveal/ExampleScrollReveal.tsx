'use client'
import { motion } from 'framer-motion'
import lcs from './ExampleScrollReveal.module.css'

const Card = ({
  text, index
}: {
  text: string
  index: number
}) => {
  return (
    <motion.div
      className={lcs.card}
      initial={{
        opacity: 0,
        // if odd index card, slide from right instead of left
        x: index % 2 === 0 ? 100 : -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: false }}
    >
      <p className={lcs.cardText}>{text}</p>
    </motion.div>
  )
}

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']

export const ExampleScrollReveal = () => {
  return (
    <div className={lcs.el}>
      {items.map((item, i) => (
        <Card key={i} text={item} index={i} />
      ))}
    </div>
  )
}
