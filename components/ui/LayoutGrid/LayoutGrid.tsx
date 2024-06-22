'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import cns from 'classnames'
import Image from 'next/image'

import lcs from './LayoutGrid.module.css'

export interface Card {
  id: number
  content: JSX.Element | React.ReactNode | string
  className: string
  image: string
}

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null)
  const [lastSelected, setLastSelected] = useState<Card | null>(null)

  const handleClick = (card: Card) => {
    setLastSelected(selected)
    setSelected(card)
  }

  const handleOutsideClick = () => {
    setLastSelected(selected)
    setSelected(null)
  }

  return (
    <div className={lcs.grid}>
      {cards.map((card, i) => (
        <div key={i} className={cns(card.className, '', lcs.card)}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cns(
              card.className,
              lcs.cardInner,
              selected?.id === card.id
                ? lcs.cardAbsolute
                : lastSelected?.id === card.id
                ? 'z-40 bg-white rounded-xl h-full w-full'
                : 'bg-white rounded-xl h-full w-full'
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <CardImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cns(
          'absolute h-full w-full left-0 top-0 opacity-0 z-10',
          selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  )
}

const CardImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.image}
      height={500}
      width={500}
      onLoad={() => setLoaded(true)}
      className={cns(
        'object-cover object-top absolute inset-0 h-full w-full transition duration-200',
        loaded ? 'blur-none' : 'blur-md'
      )}
      alt='image'
    />
  )
}

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className='bg-transparent h-full w-full flex flex-col justify-end rounded-lg relative z-[60]'>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className='absolute inset-0 h-full w-full opacity-60 z-10'
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className='relative px-8 pb-4 z-[70]'
      >
        {selected?.content}
      </motion.div>
    </div>
  )
}
