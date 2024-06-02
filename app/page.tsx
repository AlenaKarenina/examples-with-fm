'use client'
import './tailwind.css'
import './globals.css'
import Link from 'next/link'
import { LayoutGroup, AnimatePresence } from 'framer-motion'
import { LINKS_MOCKS } from '@/app/mocks/mocks'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'

export default function Home() {

  return (
    <LayoutGroup>
      <AnimatePresence>
        <main>
          <div className='box'>
            <h1 className='title'>Examples animation with framer-motion</h1>
            <div className='wrapper'>
              {LINKS_MOCKS.map(({title, href}, index) =>
                <Link key={index} className='link' href={href}>{title}</Link>
              )}
            </div>
          </div>
        </main>
      </AnimatePresence>
    </LayoutGroup>
  )
}
