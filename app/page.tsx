import './tailwind.css'
import './globals.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='main'>
      <h1 className='title'>Examples animation with framer-motion</h1>
      <Link className='link' href={'/parallax-cards'}>Parallax cards</Link>
      <Link className='link' href={'/stagger-cards'}>Stagger cards</Link>
      <Link className='link' href={'/marquee'}>Marquee</Link>
    </main>
  )
}
