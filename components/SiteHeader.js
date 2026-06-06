import Link from 'next/link'

export default function SiteHeader({ right }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="brand hand" style={{ textDecoration: 'none' }}>
          <span className="sig hand">Saumya Nayak</span>
        </Link>
        {right && <div className="topbar-right">{right}</div>}
      </div>
    </header>
  )
}
