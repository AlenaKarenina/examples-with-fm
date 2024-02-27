'use client'
import cns from 'classnames'
import lcs from './BlCards.module.css'
import { motion } from 'framer-motion'

const CARD_SIZES = ['small', 'medium', 'large']

const listVariants = {
  initial: {
    x: -25,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.5,
      ease: 'linear'
    },
  }
}

const Card = () => {
  const size = Math.floor(Math.random() * 3)
  return (
    <div
      className={cns(lcs.card, lcs[`card--size--${CARD_SIZES[size]}`])}
    >
      <span className={lcs.divider}/>
      <span className={lcs.divider}/>
      <span className={lcs.divider}/>
    </div>
  )
}

const CardList = () => {
  const items = new Array(8).fill(0);

  return (
    <motion.div
      variants={listVariants}
      className={lcs.list}
      initial="initial"
      animate="animate"
      >
      { items.map((item, i) => {
        return (
          <Card key={i} />
        )
      }) }
    </motion.div>
  )
}

export default function BlCards() {
  return (
    <section className={lcs.el}>
      <CardList />
    </section>
  )
}