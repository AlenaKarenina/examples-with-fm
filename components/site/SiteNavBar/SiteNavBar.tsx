'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useVelocity } from 'framer-motion'
import lcs from './SiteNavBar.module.css'

export function SiteNavbar() {

  // if we are sliding out a nav bar at the top of the screen, this will be it's height
  const slideDistance = 80

  // only slide it back when scrolling back at velocity above this positive (or zero) value
  const threshold = 200

  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)

  const [isScrollingBack, setIsScrollingBack] = useState(false)

  // true if the page is not scrolled or fully scrolled back
  const [isAtTop, setIsAtTop] = useState(true)
  const [isInView, setIsInView] = useState(true)

  useEffect(() => scrollVelocity.on('change', (latest) => {
      if (latest > 0) {
        setIsScrollingBack(false)
        return
      }
      if (latest < -threshold) {
        setIsScrollingBack(true)
        return
      }
    }),
    [scrollVelocity]
  )

  useEffect(() => scrollY.on('change', (latest) => setIsAtTop(latest <= 0)), [scrollY])

  useEffect(() => setIsInView(isScrollingBack || isAtTop), [
    isScrollingBack,
    isAtTop
  ])

  return (
    <motion.div
      className={lcs.el}
      animate={{ y: isInView ? 0 : -slideDistance }}
      transition={{ duration: 0.2, delay: 0.25, ease: 'easeInOut' }}
      style={{ height: slideDistance }}
    >
      Scroll-away Navbar
    </motion.div>
  );
}
