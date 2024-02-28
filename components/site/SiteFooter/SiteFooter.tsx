import lcs from './SiteFooter.module.css'

export function SiteFooter({ title = '' }) {
  return (
    <footer className={lcs.el}>
      <a
        href="/"
      >
        {title}
      </a>
    </footer>
  );
}
