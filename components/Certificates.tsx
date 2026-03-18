import { HiExternalLink } from 'react-icons/hi'
import { BsCalendar3, BsClock, BsImage } from 'react-icons/bs'
import { MdVerified } from 'react-icons/md'
import { SiReact, SiNextdotjs, SiTypescript } from 'react-icons/si'
import { SiAlx } from "react-icons/si";

const certs = [
  {
    issuer: 'ALX Africa',
    date: '30 Jun 2025',
    duration: '12 weeks',
    title: 'Professional Foundations',
    desc: 'Learn key leadership and professional skills that will help you navigate and succeed in the workplace. Covers communication, teamwork, problem-solving, and career readiness.',
    skills: ['Leadership', 'Communication', 'Teamwork', 'Problem Solving', 'Career Readiness', 'Workplace Ethics'],
    accent: '#1B4332',
    accentLight: '#D8F3DC',
    Icon: SiAlx ,
    // credential: 'ALX-PF-2025',
  },
  {
    issuer: 'ALX Africa',
    date: 'In Progress',
    duration: 'Advanced Track',
    title: 'Front End Pro Dev',
    desc: 'Master advanced front-end technologies like React, Next.js, and TypeScript to build responsive and dynamic user interfaces at a professional level.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'Dynamic Interfaces'],
    accent: '#F4A000',
    accentLight: '#FFF3CD',
    Icon: SiAlx ,
    // credential: 'ALX-FEPD-2025',
    techIcons: [
      { Icon: SiReact,      label: 'React'      },
      { Icon: SiNextdotjs,  label: 'Next.js'    },
      { Icon: SiTypescript, label: 'TypeScript'  },
    ],
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="container">

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="label" style={{ justifyContent: 'center' }}>Achievements</div>
          <h2 className="section-title">
            My <span className="italic">Certificates</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 440, margin: '0 auto' }}>
            Certifications earned through ALX Africa&apos;s rigorous, project-based software engineering programme.
          </p>
        </div>

        {/* ── Certificate Cards ── */}
        <div className="cert-grid">
          {certs.map(({ issuer, date, duration, title, desc, skills, accent, accentLight, Icon, techIcons }) => (
            <div key={title} className="cert-card">

              {/* Top colour bar is already handled by cert-card::before in CSS */}

              {/* Issuer + date row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  background: accentLight,
                  color: accent,
                  borderRadius: 100,
                  padding: '5px 14px',
                  fontSize: 12,
                  fontWeight: 700,
                }}>
                  <Icon size={13} />
                  {issuer}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'var(--text-muted)' }}>
                    <BsCalendar3 size={10} />
                    {date}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--text-muted)' }}>
                    <BsClock size={10} />
                    {duration}
                  </div>
                </div>
              </div>

              {/* Title with verified icon */}
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                <MdVerified size={22} color={accent} style={{ flexShrink: 0, marginTop: 1 }} />
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', lineHeight: 1.3, margin: 0 }}>
                  {title}
                </h3>
              </div>

              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 20 }}>
                {desc}
              </p>

              {/* Tech icons row (only for Front End cert) */}
              {techIcons && (
                <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                  {techIcons.map(({ Icon: TIcon, label }) => (
                    <div key={label} style={{
                      display: 'flex', alignItems: 'center', gap: 5,
                      background: 'var(--section-alt)',
                      border: '1px solid var(--border)',
                      borderRadius: 100, padding: '5px 12px',
                      fontSize: 12, fontWeight: 600, color: 'var(--text-muted)',
                    }}>
                      <TIcon size={12} color="var(--green)" />
                      {label}
                    </div>
                  ))}
                </div>
              )}

              {/* Skill tags */}
              <div className="cert-skills">
                {skills.map((s) => (
                  <span key={s} style={{
                    background: accentLight,
                    color: accent,
                    fontSize: 11,
                    fontWeight: 600,
                    padding: '3px 10px',
                    borderRadius: 100,
                  }}>
                    {s}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="cert-footer">
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  {/* <BsImage size={11} color="var(--text-muted)" /> */}
                  <span style={{ fontFamily: 'monospace', fontSize: 11 }}>
                    {/* ID: {credential} */}
                  </span>
                </div>
                <a href="#" className="cert-view-btn">
                  View Certificate <HiExternalLink size={12} />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* ── ALX Programme note ── */}
        <div style={{
          textAlign: 'center',
          marginTop: 48,
          padding: '28px 40px',
          background: 'var(--section-alt)',
          borderRadius: 16,
          border: '1px solid var(--border)',
          maxWidth: 580,
          margin: '48px auto 0',
        }}>
          <div style={{
            width: 44, height: 44,
            background: 'var(--green-light)',
            borderRadius: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 14px',
            color: 'var(--green)',
          }}>
            <SiAlx  size={22} />
          </div>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: 'var(--text)',
            lineHeight: 1.6,
            marginBottom: 10,
          }}>
            &ldquo;Learning never exhausts the mind ;it only ignites it further.&rdquo;
          </p>
          {/* <p style={{ color: 'var(--amber)', fontSize: 13, fontWeight: 600 }}>
            ALX Africa Software Engineering Programme · Cohort 2024–2025 🌍
          </p> */}
        </div>

      </div>
    </section>
  )
}