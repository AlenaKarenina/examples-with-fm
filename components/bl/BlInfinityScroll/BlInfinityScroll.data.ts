export interface Item {
  color: string
}

let currentHue = 0
const hueStep = 10
export function generateItems(quantity = 12) {
  const items: Item[] = []
  for (let i = 0; i < quantity; i++) {
    items.push({ color: `hsl(${currentHue}, 100%, 60%)` })
    currentHue += hueStep
  }
  return items
}

export const initialItems = generateItems()
