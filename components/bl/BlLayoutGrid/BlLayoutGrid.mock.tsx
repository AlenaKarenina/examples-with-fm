import lcs from './BlLayoutGrid.module.css'

const SkeletonOne = () => {
  return (
    <div>
      <h3 className={lcs.title}>House in the woods</h3>
      <p className={lcs.text}>
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  )
}

const SkeletonTwo = () => {
  return (
    <div>
      <p className={lcs.title}>House above the clouds</p>
      <p className={lcs.text}>
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  )
}

const SkeletonThree = () => {
  return (
    <div>
      <p className={lcs.title}>Greens all over</p>
      <p className={lcs.text}>
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  )
}

const SkeletonFour = () => {
  return (
    <div>
      <p className={lcs.title}>Rivers are serene</p>
      <p className={lcs.text}>
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  )
}

export const CARDS = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: `${lcs.spanTwo}`,
    image:
      '/images/02.jpg',
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: `${lcs.spanOne}`,
    image:
      '/images/12.jpg',
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: `${lcs.spanOne}`,
    image:
      '/images/03.jpg',
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: `${lcs.spanTwo}`,
    image:
      '/images/04.jpg',
  }
]
