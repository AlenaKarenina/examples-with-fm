import { useEffect, useState } from 'react'
import { useAnimate, useInView } from 'framer-motion'

export const useAnimatedCounter = (
  maxValue: number,
  initialValue = 0,
  duration = 1.5,
) => {
  const [counter, setCounter] = useState<number>(initialValue)

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  useEffect(() => {
    if (isInView) {
      const controls = animate(initialValue, maxValue, {
        duration,
        onUpdate(value) {
          setCounter(value)
          //scope.current.textContent = value.toFixed(0)
        }
      })
      return () => controls.stop()
    }

  }, [initialValue, maxValue, duration, isInView, animate, scope])

  return counter
}
