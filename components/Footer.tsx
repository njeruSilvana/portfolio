import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { HiHeart } from 'react-icons/hi'

export default function Footer() {
  const links = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact']
  const socials = [
    { Icon: FaGithub,   href: 'https://github.com/njeruSilvana'   },
    { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/silvana-njeru-849a38300/' },
    // { Icon: FaTwitter,  href: 'https://twitter.com'  },
    // { Icon: FaInstagram,href: '#'                    },
  ]
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
           Silvana <span>Njeru.</span>
        </div>
        <p className="footer-tagline">CS Student · Web Developer · UI Enthusiast</p>

        <nav className="footer-links">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
          ))}
        </nav>

        <div className="footer-socials">
          {socials.map(({ Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noreferrer" className="btn-icon">
              <Icon size={16} />
            </a>
          ))}
        </div>

        <div className="footer-copy">
          Designed &amp; built with{' '}
          <HiHeart size={12} style={{ display: 'inline', color: 'var(--amber)' }} />{' '}
          using Next.js &amp; Tailwind CSS · © {new Date().getFullYear()} Silvana Muthoni Njeru
        </div>
      </div>
    </footer>
  )
}