'use client'
import { useEffect, useState } from 'react'
import { FiPlay, FiArrowRight } from 'react-icons/fi'
import { BsCodeSlash, BsLightningChargeFill } from 'react-icons/bs'
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { MdOutlineWorkOutline } from 'react-icons/md'

// What cycles in the typewriter — specific, keyword-rich, recruiter-friendly
const stack = [
  'React & Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Responsive UIs',
  'Frontend Dev',
]

export default function Hero() {
  const [idx, setIdx]         = useState(0)
  const [text, setText]       = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = stack[idx]
    let t: ReturnType<typeof setTimeout>
    if (!deleting && text.length < full.length) {
      t = setTimeout(() => setText(full.slice(0, text.length + 1)), 80)
    } else if (!deleting && text.length === full.length) {
      t = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(full.slice(0, text.length - 1)), 42)
    } else {
      setDeleting(false)
      setIdx((i) => (i + 1) % stack.length)
    }
    return () => clearTimeout(t)
  }, [text, deleting, idx])

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-inner">

          {/* ── Left ── */}
          <div>

            {/* Availability badge — first thing a recruiter sees */}
            <div className="hero-tag anim-1">
              <BsLightningChargeFill size={11} color="var(--amber)" />
              Final semester · Available for internships &amp; entry-level roles
            </div>

            {/* Headline — name + what you DO, not what you ARE */}
            <h1 className="hero-title anim-2">
              Hi, I&apos;m{' '}
              <span className="name">Silvana Njeru</span>
              {' '},<br />
              I build clean,{' '}
              <span style={{ color: 'var(--green)' }}>responsive</span>
              <br />
              web interfaces.
            </h1>

            {/* Typewriter line — specific tech stack keywords */}
            <p className="hero-subtitle anim-3">
              Specializing in{' '}
              <strong style={{ color: 'var(--green)', fontWeight: 700 }}>
                {text}
                <span style={{ borderRight: '2px solid var(--amber)', marginLeft: 2 }} />
              </strong>
              <br />
              Turning designs into fast, pixel-perfect web experiences.
              Currently in my final semester and actively looking for
              opportunities to contribute to a real team.
            </p>

            {/* CTAs */}
            <div className="hero-btns anim-4">
              <a href="#projects" className="btn btn-amber">
                View My Work
                <FiPlay size={13} />
              </a>
              <a href="#contact" className="btn btn-outline">
                <MdOutlineWorkOutline size={15} />
                Hire Me
              </a>
            </div>

            {/* Tech stack pills — recruiters ctrl+F for these */}
            <div className="anim-5" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              marginTop: 32,
              marginBottom:20,
              paddingTop: 28,
              borderTop: '1px solid var(--border)',
            }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, alignSelf: 'center', marginRight: 4 }}>
                My stack:
              </span>
              {[
                { Icon: SiReact,        label: 'React'      },
                { Icon: SiNextdotjs,    label: 'Next.js'    },
                { Icon: SiTypescript,   label: 'TypeScript' },
                { Icon: SiTailwindcss,  label: 'Tailwind'   },
              ].map(({ Icon, label }) => (
                <div key={label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'var(--section-alt)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-full)',
                  padding: '5px 12px',
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                }}>
                  <Icon size={13} color="var(--green)" />
                  {label}
                </div>
              ))}
            </div>

            {/* Stats */}
            {/* <div className="hero-stats" style={{ marginTop: 28, paddingTop: 24 }}>
              {[
                { num: 'Final', label: 'Semester' },
                { num: '10+',   label: 'Projects Built' },
                { num: '2',     label: 'Certificates' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* ── Right ── */}
          <div className="hero-image-wrap anim-3">
            <div className="hero-circle float">
              <span className="hero-avatar-text" role="img" aria-label="developer">
                👨‍💻
              </span>
            </div>

            {/* Floating badges — specific, not generic */}
            <div className="hero-badge hero-badge-1">
              <BsCodeSlash size={13} style={{ display: 'inline', marginRight: 6 }} />
              Frontend Developer
            </div>
            <div className="hero-badge hero-badge-2">
              🎓 CS Student · Final Year
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
