import { FiGithub, FiExternalLink, FiUsers } from 'react-icons/fi'
import { BsStarFill, BsPeopleFill, BsBoxArrowUpRight } from 'react-icons/bs'
import { MdWorkspacePremium } from 'react-icons/md'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiReact, SiGraphql } from 'react-icons/si'
import { HiArrowRight } from 'react-icons/hi'

// ─── Featured Projects ────────────────────────────────────────────────────────
const featured = [
  {
    label: 'Lead Developer',
    labelColor: 'var(--green)',
    labelBg: 'var(--green-light)',
    badge: '⭐ Best Work',
    title: 'YEN — Youth Entrepreneurship Network',
    desc: 'A platform where young innovators pitch ideas, connect with investors and mentors, and build businesses that create real jobs. Built to tackle youth unemployment by turning idea-havers into job-creators.',
    image: null,
    accent: '#1E6FD9',
    bgGradient: 'linear-gradient(135deg, #1a4fa0 0%, #1E6FD9 50%, #00C6CF 100%)',
    tags: [
      { icon: <SiReact size={11} />, label: 'React' },
      { icon: <SiNextdotjs size={11} />, label: 'Next.js' },
      { icon: <SiTailwindcss size={11} />, label: 'Tailwind' },
    ],
    githubUrl: 'https://github.com/njeruSilvana/yen-platform',
    liveUrl: 'https://yen-project.netlify.app/',
    stats: [
      { icon: <BsStarFill size={10} />, value: 'Personal project' },
      { icon: <FiUsers size={10} />, value: 'Full build' },
    ],
  },
  {
    label: 'Collaborator',
    labelColor: '#7C3AED',
    labelBg: '#EDE9FE',
    badge: '🤝 Collaboration',
    title: 'Multipoint Advisory',
    desc: 'Professional advisory firm website delivering integrated solutions across infrastructure, digital transformation, and sustainable development. Contributed as a collaborator on a real client-facing production site.',
    image: null,
    accent: '#1E2A5E',
    bgGradient: 'linear-gradient(135deg, #0f1729 0%, #1E2A5E 50%, #2d4080 100%)',
    tags: [
      { icon: <SiReact size={11} />, label: 'React' },
      { icon: <SiTailwindcss size={11} />, label: 'Tailwind' },
      { icon: <SiTypescript size={11} />, label: 'TypeScript' },
    ],
    githubUrl: 'https://github.com/njeruSilvana/multipoint',
    liveUrl: 'https://multipoint.netlify.app/',
    stats: [
      { icon: <BsPeopleFill size={10} />, value: 'Team project' },
      { icon: <MdWorkspacePremium size={10} />, value: 'Production site' },
    ],
  },
]

// ─── ALX Milestones ───────────────────────────────────────────────────────────
const alxProjects = [
  {
    title: 'ALX Listing App',
    desc: 'Beautiful property listing app built with Next.js, TypeScript & Tailwind CSS — inspired by Airbnb.',
    tags: [
      { icon: <SiNextdotjs size={10} />, label: 'Next.js' },
      { icon: <SiTypescript size={10} />, label: 'TypeScript' },
      { icon: <SiTailwindcss size={10} />, label: 'Tailwind' },
    ],
    url: 'https://github.com/njeruSilvana/alx-listing-app',
  },
  // {
  //   title: 'ALX GraphQL',
  //   desc: 'Hands-on GraphQL project exploring queries, mutations and schema design for modern data fetching.',
  //   tags: [
  //     { icon: <SiGraphql size={10} />, label: 'GraphQL' },
  //     { icon: <SiReact size={10} />, label: 'React' },
  //   ],
  //   url: 'https://github.com/silvanjeru/alx-graphql',
  // },
  {
    title: 'Coffee Shop App',
    desc: 'A responsive coffee shop web app with menu browsing, product cards and a clean checkout UI.',
    tags: [
      { icon: <SiReact size={10} />, label: 'React' },
      { icon: <SiTailwindcss size={10} />, label: 'Tailwind' },
    ],
    url: 'https://github.com/njeruSilvana/alx-coffee-shop-app',
  },
  {
    title: 'Travel Website',
    desc: 'Destination travel site with hero sections, trip cards, and responsive layouts across all screen sizes.',
    tags: [
      { icon: <SiReact size={10} />, label: 'React' },
      { icon: <SiTailwindcss size={10} />, label: 'Tailwind' },
    ],
    url: 'https://github.com/njeruSilvana/Travel.git',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">

        {/* ── Header ── */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div className="label">Projects</div>
            <h2 className="section-title">
              Things I&apos;ve <span className="italic">Built</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 480, marginTop: 8 }}>
              A mix of personal projects, team collaborations, and learning milestones.
              More on the way; I&apos;m always building.
            </p>
          </div>
          <a
            href="https://github.com/njeruSilvana"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <FiGithub size={14} />
            GitHub Profile
          </a>
        </div>

        {/* ── Featured Projects ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
          {featured.map(({ label, labelColor, labelBg, badge, title, desc, bgGradient, tags, githubUrl, liveUrl, stats }) => (
            <div
              key={title}
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid var(--border)',
                background: 'var(--white)',
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-5px)'
                el.style.boxShadow = '0 20px 48px rgba(0,0,0,0.12)'
                el.style.borderColor = labelColor
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
                el.style.borderColor = 'var(--border)'
              }}
            >
              {/* Thumbnail — gradient with site name */}
              <div style={{
                height: 190,
                background: bgGradient,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                gap: 6,
              }}>
                {/* Grid overlay like image 2 */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }} />
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'white',
                  position: 'relative',
                  zIndex: 1,
                  letterSpacing: '-0.02em',
                  textShadow: '0 2px 12px rgba(0,0,0,0.3)',
                }}>
                  {title.split('—')[0].trim()}
                </span>
                {/* Stats row */}
                <div style={{ display: 'flex', gap: 16, position: 'relative', zIndex: 1 }}>
                  {stats.map(({ icon, value }) => (
                    <div key={value} style={{
                      display: 'flex', alignItems: 'center', gap: 5,
                      background: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: 100,
                      padding: '4px 10px',
                      fontSize: 11,
                      color: 'rgba(255,255,255,0.9)',
                      fontWeight: 500,
                    }}>
                      {icon} {value}
                    </div>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '22px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Role badge + star badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700,
                    color: labelColor,
                    background: labelBg,
                    borderRadius: 100,
                    padding: '3px 10px',
                    letterSpacing: '0.03em',
                  }}>
                    {label}
                  </span>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 500 }}>
                    {badge}
                  </span>
                </div>

                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8, lineHeight: 1.3 }}>
                  {title}
                </h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
                  {desc}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                  {tags.map(({ icon, label: tl }) => (
                    <span key={tl} style={{
                      display: 'flex', alignItems: 'center', gap: 5,
                      background: 'var(--section-alt)',
                      border: '1px solid var(--border)',
                      borderRadius: 100, padding: '4px 10px',
                      fontSize: 11, fontWeight: 600, color: 'var(--text-muted)',
                    }}>
                      {icon} {tl}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: 10 }}>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                      padding: '10px 0',
                      background: 'var(--green)',
                      color: 'white',
                      borderRadius: 8, fontSize: 12, fontWeight: 600,
                      transition: 'background 0.2s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--green-mid)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--green)' }}
                  >
                    <FiGithub size={13} /> View Code
                  </a>
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                      padding: '10px 0',
                      background: 'transparent',
                      color: 'var(--green)',
                      border: '1.5px solid var(--border)',
                      borderRadius: 8, fontSize: 12, fontWeight: 600,
                      transition: 'all 0.2s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'var(--green)'
                      el.style.background = 'var(--section-alt)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'var(--border)'
                      el.style.background = 'transparent'
                    }}
                  >
                    <FiExternalLink size={13} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── ALX Milestones Grouped Card ── */}
        <div style={{
          background: 'var(--white)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          overflow: 'hidden',
        }}>
          {/* Card header */}
          <div style={{
            background: 'linear-gradient(135deg, var(--green) 0%, var(--green-mid) 100%)',
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(244,160,0,0.2)',
                border: '1px solid rgba(244,160,0,0.4)',
                borderRadius: 100, padding: '3px 12px',
                fontSize: 11, fontWeight: 700, color: 'var(--amber)',
                marginBottom: 10,
              }}>
                <MdWorkspacePremium size={12} />
                ALX Software Engineering Programme
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'white', margin: 0 }}>
                Learning Milestones
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, marginTop: 4 }}>
                Projects built during my ALX Software Engineering journey
              </p>
            </div>
            <a
              href="https://github.com/njeruSilvana"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: 'white', borderRadius: 8,
                padding: '9px 18px', fontSize: 12, fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.22)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)' }}
            >
              <FiGithub size={13} /> View All on GitHub
            </a>
          </div>

          {/* Projects grid inside card */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
          }}>
            {alxProjects.map(({ title, desc, tags, url }, i) => (
              <div
                key={title}
                style={{
                  padding: '22px 22px',
                  borderRight: i < alxProjects.length - 1 ? '1px solid var(--border)' : 'none',
                  borderTop: '1px solid var(--border)',
                  transition: 'background 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--section-alt)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
              >
                <h4 style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 8, lineHeight: 1.3 }}>
                  {title}
                </h4>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6, flex: 1, marginBottom: 14 }}>
                  {desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 14 }}>
                  {tags.map(({ icon, label: tl }) => (
                    <span key={tl} style={{
                      display: 'flex', alignItems: 'center', gap: 4,
                      background: 'var(--green-light)',
                      color: 'var(--green)',
                      borderRadius: 100, padding: '3px 8px',
                      fontSize: 10, fontWeight: 600,
                    }}>
                      {icon} {tl}
                    </span>
                  ))}
                </div>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    fontSize: 12, fontWeight: 600, color: 'var(--amber)',
                    textDecoration: 'none',
                    transition: 'gap 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = '10px' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = '5px' }}
                >
                  View Repo <HiArrowRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ── "More coming" nudge ── */}
        <div style={{
          textAlign: 'center',
          marginTop: 40,
          padding: '24px 32px',
          background: 'var(--amber-light)',
          borderRadius: 12,
          border: '1px dashed var(--amber)',
        }}>
          <p style={{ fontSize: 14, color: 'var(--green)', fontWeight: 600, margin: 0 }}>
            🚧 More projects coming soon.
            <br></br>Stay tuned!
          </p>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .featured-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 700px) {
          .alx-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .alx-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
