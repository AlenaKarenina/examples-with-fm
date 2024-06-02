'use client'

import cns from 'classnames'
import { motion } from 'framer-motion'
import lcs from './BlTabs.module.css'
import { useState } from 'react'

const tabs = [
  {
    name: 'Red',
    color: '#f00',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
    rhoncus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
    rhoncus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
    rhoncus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
    rhoncus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
    rhoncus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
    rhoncus quam.`
  },
  {
    name: 'Purple',
    color: '#b1f',
    content: `Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
    imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
    Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
    blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
    ipsum tellus, eu tincidunt neque tincidunt a. Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
    imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
    Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
    blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
    ipsum tellus, eu tincidunt neque tincidunt a.`
  },
  {
    name: 'Orange',
    color: '#f90',
    content: `In eget sodales arcu, consectetur efficitur metus. Duis efficitur
    tincidunt odio, sit amet laoreet massa fringilla eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
    rhoncus quam. In eget sodales arcu, consectetur efficitur metus. Duis efficitur
    tincidunt odio, sit amet laoreet massa fringilla eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
    rhoncus quam. In eget sodales arcu, consectetur efficitur metus. Duis efficitur
    tincidunt odio, sit amet laoreet massa fringilla eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
    rhoncus quam. In eget sodales arcu, consectetur efficitur metus. Duis efficitur
    tincidunt odio, sit amet laoreet massa fringilla eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
    rhoncus quam. In eget sodales arcu, consectetur efficitur metus. Duis efficitur
    tincidunt odio, sit amet laoreet massa fringilla eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
    rhoncus quam.`
  },
  {
    name: 'Green',
    color: '#0c0',
    content: `Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
    Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
    Proin sit amet lacus mollis, semper massa ut, rutrum mi. Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
    Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
    Proin sit amet lacus mollis, semper massa ut, rutrum mi. Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
    Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
    Proin sit amet lacus mollis, semper massa ut, rutrum mi.`
  }
]

const duration = 0.3

export default function Example() {
  const [selected, setSelected] = useState(0)
  const [formerColor, setFormerColor] = useState(tabs[0].color)

  return (
    <div className={lcs.container}>
      <div className={lcs.controls}>
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
      <div className={lcs.box}>
        {tabs.map(({ content }, i) => (
          <motion.div
            className={lcs.content}
            initial={{ opacity: i === selected ? 1 : 0, zIndex: i === selected ? 1 : -1 }}
            animate={{ opacity: i === selected ? 1 : 0, zIndex: i === selected ? 1 : -1 }}
            transition={{ duration }}
            key={i}>
            {content}
          </motion.div>
        ))}
      </div>
    </div>
  )
}


