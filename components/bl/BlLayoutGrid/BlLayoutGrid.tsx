'use client'

import { Card, LayoutGrid } from '@/components/ui/LayoutGrid/LayoutGrid'
import lcs from './BlLayoutGrid.module.css'

export function BlLayoutGrid({ cards }: {
  cards: Card[]
}) {
  return (
    <div className={lcs.el}>
      <LayoutGrid cards={cards} />
    </div>
  )
}


