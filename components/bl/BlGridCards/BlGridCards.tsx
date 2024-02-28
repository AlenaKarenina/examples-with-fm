import { ParallaxScroll } from '@/components/ui/ParallaxScroll/ParallaxScroll'

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
];

export default function BlGridCards() {
  return (
    <ParallaxScroll images={images} />
  )
}
