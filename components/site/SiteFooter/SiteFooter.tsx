import lcs from './SiteFooter.module.css'
import Link from 'next/link'

export function SiteFooter({ title = '' }) {
  return (
    <footer className={lcs.el}>
      <Link href={'/'}>{title}</Link>
    </footer>
  );
}
