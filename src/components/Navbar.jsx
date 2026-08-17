import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [['Home', '/'], ['Properties', '/properties'], ['About', '/about'], ['Contact', '/contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="text-2xl font-bold tracking-tight text-brand-700">Flex Living<span className="text-brand-500">.</span></Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <NavLink key={href} to={href} className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-brand-600' : 'text-stone-600 hover:text-brand-600'}`}>{label}</NavLink>)}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link to="/auth" className="rounded-full px-4 py-2.5 text-sm font-semibold text-stone-700 hover:bg-stone-50">Log in</Link>
          <Link to="/auth?mode=signup" className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700">Sign up</Link>
        </div>
        <button className="rounded-xl p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-stone-100 bg-white px-5 py-4 md:hidden"><nav className="mx-auto flex max-w-7xl flex-col gap-2">{links.map(([label, href]) => <NavLink onClick={() => setOpen(false)} key={href} to={href} className="rounded-xl px-3 py-3 font-medium text-stone-700 hover:bg-brand-50">{label}</NavLink>)}<Link onClick={() => setOpen(false)} to="/auth" className="mt-2 rounded-full bg-brand-600 px-4 py-3 text-center font-semibold text-white">Log in / Sign up</Link></nav></div>}
    </header>
  )
}
