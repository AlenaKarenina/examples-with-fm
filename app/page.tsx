import './tailwind.css'
import './globals.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='main'>
      <h1 className='title'>Examples animation with framer-motion</h1>
      <Link className='link' href={'/parallax-cards-first'}>Parallax cards first</Link>
      <Link className='link' href={'/parallax-cards-second'}>Parallax cards second</Link>
      <Link className='link' href={'/parallax-cards-third'}>Parallax cards third</Link>
      {/*<Link className='link' href={'/stagger-cards'}>Stagger cards</Link>*/}
      <Link className='link' href={'/marquee-text'}>Marquee text</Link>
      <Link className='link' href={'/example-scroll'}>Scroll animation with image shadow</Link>
      <Link className='link' href={'/example-scroll-reveal'}>Scroll animation reveal cards</Link>
    </main>
  )
}
