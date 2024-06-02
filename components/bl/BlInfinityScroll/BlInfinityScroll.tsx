'use client'
import { useState } from 'react'
import lcs from './BlInfinityScroll.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { Item, generateItems, initialItems } from './BlInfinityScroll.data'

interface ListProps {
  items: Item[]
}

function List({ items }: ListProps) {
  return (
    <ul className={lcs.list}>
      <AnimatePresence initial={false}>
        {items.map(({ color }, i) => (
          <motion.li
            key={i}
            className={lcs.item}
            style={{ backgroundColor: color }}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          />
        ))}
      </AnimatePresence>
    </ul>
  )
}

export default function BlInfinityScroll() {
  const [isLoading, setIsLoading] = useState(false)
  const [items, setItems] = useState(initialItems)

  const fetchItems = () => {
    setIsLoading(true)

    // Timeout emulating a network request
    setTimeout(() => {
      setIsLoading(false)
      setItems([...items, ...generateItems()])
    }, 1000)
  }

  return (
    <div className={lcs.container}>
      <h1>
        {window.IntersectionObserver
          ? '🥳 IntersectionObserver supported'
          : '😫 IntersectionObserver not supported'}
      </h1>
      <List items={items} />
      <motion.button
        // Change the key with the loaded items length to
        // create a new button each time new items load
        className={lcs.button}
        key={items.length}
        // Pairing this with once: true will ensure just one
        // network request per load
        viewport={{
          once: true,
          margin: '0px'
        }}
        onViewportEnter={fetchItems}
        onClick={fetchItems}
      >
        {isLoading ? 'Loading...' : 'Load more'}
      </motion.button>
    </div>
  )
}
