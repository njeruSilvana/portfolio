import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiHtml5, SiCss, SiJavascript, SiGit, SiGithub, SiFigma, SiVercel,
} from 'react-icons/si'

const techStack = [
  { Icon: SiReact,       label: 'React',       color: '#61DAFB' },
  { Icon: SiNextdotjs,   label: 'Next.js',     color: '#000000' },
  { Icon: SiTypescript,  label: 'TypeScript',  color: '#3178C6' },
  { Icon: SiTailwindcss, label: 'Tailwind CSS',color: '#06B6D4' },
  { Icon: SiJavascript,  label: 'JavaScript',  color: '#F7DF1E' },
  { Icon: SiHtml5,       label: 'HTML5',       color: '#E34F26' },
  { Icon: SiCss,        label: 'CSS3',        color: '#1572B6' },
  { Icon: SiGit,         label: 'Git',         color: '#F05032' },
  { Icon: SiGithub,      label: 'GitHub',      color: '#181717' },
  { Icon: SiFigma,       label: 'Figma',       color: '#F24E1E' },
  { Icon: SiVercel,      label: 'Vercel',      color: '#000000' },
]

// Triple the array so the seamless loop has enough runway
const looped = [...techStack, ...techStack, ...techStack]

export default function Ticker() {
  return (
    <section style={{
      background: 'var(--white)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '40px 0',
      overflow: 'hidden',
    }}>
      {/* Section label */}
      <p style={{
        textAlign: 'center',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: 28,
      }}>
        My Tech Stack
      </p>

      {/* Scrolling row */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Left fade */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 120,
          background: 'linear-gradient(to right, var(--white), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        {/* Right fade */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 120,
          background: 'linear-gradient(to left, var(--white), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        <div style={{
          display: 'flex',
          gap: 12,
          width: 'max-content',
          animation: 'stackScroll 28s linear infinite',
        }}>
          {looped.map(({ Icon, label, color }, i) => (
            <div
              key={`${label}-${i}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                padding: '14px 22px',
                background: 'var(--off-white)',
                border: '1px solid var(--border)',
                borderRadius: 14,
                minWidth: 90,
                transition: 'all 0.22s ease',
                cursor: 'default',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--white)'
                el.style.borderColor = color
                el.style.transform = 'translateY(-3px)'
                el.style.boxShadow = `0 8px 24px ${color}22`
                // Pause the animation on hover
                const track = el.parentElement as HTMLElement
                if (track) track.style.animationPlayState = 'paused'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--off-white)'
                el.style.borderColor = 'var(--border)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
                const track = el.parentElement as HTMLElement
                if (track) track.style.animationPlayState = 'running'
              }}
            >
              <Icon
                size={28}
                color={color}
                style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.1))' }}
              />
              <span style={{
                fontSize: 11,
                fontWeight: 600,
                color: 'var(--text-muted)',
                whiteSpace: 'nowrap',
                letterSpacing: '0.02em',
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes stackScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </section>
  )
}