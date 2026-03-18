'use client'
import { useState } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const interests = [
  'Web Development', 'UI/UX Design', 'Full-time Role', 'Internship',
]

export default function Contact() {
  const [chips, setChips] = useState<string[]>([])
  const toggle = (c: string) =>
    setChips((p) => p.includes(c) ? p.filter((x) => x !== c) : [...p, c])

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="label" style={{ justifyContent: 'center' }}>Contact</div>
          <h2 className="section-title">
            Let&apos;s <span className="italic">Work Together</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 440, margin: '0 auto' }}>
            Have a project in mind or an exciting opportunity? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="contact-grid">

          {/* ── Left info ── */}
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
              Whether it&apos;s a collaboration, freelance gig, internship, or just a hello 
              my inbox is always open. Let&apos;s discuss something cool together.
            </p>

            {/* Contact details */}
            {[
              { Icon: FiMail,    label: 'Email',        value: 'njerusilvana23@email.com' },
              { Icon: FiMapPin,  label: 'Location',     value: 'Nairobi, Kenya' },
              { Icon: FiClock,   label: 'Availability', value: 'Mon–Fri, 9AM–6PM EAT' },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="contact-info-item">
                <div className="contact-icon-box"><Icon size={18} /></div>
                <div>
                  <div className="contact-label">{label}</div>
                  <div className="contact-value">{value}</div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div style={{ marginTop: 32 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 14 }}>
                Find me on
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                {[
                  { Icon: FaGithub,   href: 'https://github.com/njeruSilvana',   color: '#111' },
                  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/silvana-njeru-849a38300/', color: '#0077B5' },
                  // { Icon: FaTwitter,  href: 'https://twitter.com',  color: '#1DA1F2' },
                  // { Icon: FaInstagram,href: '#',                    color: '#E1306C' },
                ].map(({ Icon, href, color }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: 40, height: 40,
                      border: '1.5px solid var(--border)',
                      borderRadius: 10,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--text-muted)',
                      transition: 'all 0.2s',
                      fontSize: 17,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = color
                      el.style.color = 'white'
                      el.style.borderColor = color
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = 'transparent'
                      el.style.color = 'var(--text-muted)'
                      el.style.borderColor = 'var(--border)'
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right form ── */}
          <div style={{
            background: 'var(--white)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '36px 32px',
          }}>
            {/* Interest chips */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>
                I&apos;m interested in…
              </div>
              <div className="chip-wrap">
                {interests.map((c) => (
                  <button
                    key={c}
                    className={`chip ${chips.includes(c) ? 'active' : ''}`}
                    onClick={() => toggle(c)}
                    type="button"
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="form-row">
              <div className="form-group">
                <input className="form-input" placeholder="Your name" type="text" />
              </div>
              <div className="form-group">
                <input className="form-input" placeholder="Your email" type="email" />
              </div>
            </div>
            <div className="form-group">
              <input className="form-input" placeholder="Subject" type="text" />
            </div>
            <div className="form-group">
              <textarea className="form-input" placeholder="Your message..." rows={5} />
            </div>

            <button className="btn btn-green" style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}>
              <FiSend size={14} />
              Send Message
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}