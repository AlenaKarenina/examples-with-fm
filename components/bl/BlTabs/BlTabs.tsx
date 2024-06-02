'use client'

import { motion } from 'framer-motion'
import lcs from './BlTabs.module.css'
import { useState } from 'react'

const tabs = [
  { name: 'Red', color: '#f00' },
  { name: 'Purple', color: '#b1f' },
  { name: 'Orange', color: '#f90' },
  { name: 'Green', color: '#0c0' }
]

const duration = 0.3

export default function Example() {
  const [selected, setSelected] = useState(0)
  const [formerColor, setFormerColor] = useState(tabs[0].color)

  return (
    <div className={lcs.container}>
      {tabs.map(({ name, color }, i) => (
        <motion.button
          className={lcs.tab}
          key={i}
          initial={{ color: i === selected ? "#fff" : "#222" }}
          animate={{ color: i === selected ? "#fff" : "#222" }}
          transition={{ duration }}
          onTap={() => {
            setFormerColor(tabs[selected].color)
            setSelected(i)
          }}
        >
          <span
            className={lcs.name}
          >
            {name}
          </span>
          {i === selected && (
            <motion.span
              className={lcs.selection}
              layoutId='selected'
              initial={{ backgroundColor: formerColor }}
              animate={{ backgroundColor: color }}
              transition={{ duration }}
            />
          )}
        </motion.button>
      ))}
    </div>
  )
}


