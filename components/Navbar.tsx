'use client'
import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiMail } from 'react-icons/fi'

const links = [
  { href: '#home',         label: 'Home' },
  { href: '#about',        label: 'About' },
  { href: '#skills',       label: 'Skills' },
  { href: '#projects',     label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact',      label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { threshold: 0.4 }
    )
    document.querySelectorAll('section[id]').forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#home" className="logo">
            <div className="logo-mark">S.M</div>
            Silvana Muthoni Njeru
          </a>

          <ul className="nav-links">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={active === href.slice(1) ? 'active' : ''}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-green" style={{ fontSize: 13 }}>
            <FiMail size={14} />
            Contact Me
          </a>

          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(({ href, label }) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href="#contact" className="btn btn-green" style={{ marginTop: 8, justifyContent: 'center' }}
          onClick={() => setOpen(false)}>
          Contact Me
        </a>
      </div>
    </>
  )
}