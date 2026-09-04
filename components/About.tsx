'use client'
import Image from 'next/image'
import { HiArrowRight, HiDownload } from 'react-icons/hi'
import { BsCodeSlash, BsPalette2, BsLightningChargeFill, BsPeopleFill } from 'react-icons/bs'

export default function About() {
  return (
    <section id="about" className="section section-dark">
      <div className="container">
        <div className="about-grid">

          {/* ── Image side ── */}
          <div className="about-image-wrap">
            <div className="about-circle float">
              {/* Replace '/profile.jpg' with your photo file in the /public folder */}
              <Image
                src="/profile.jpg"
                alt="Silvana Njeru"
                fill
                sizes="(max-width: 768px) 220px, 320px"
                style={{ objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>

            {[
              { label: 'React / Next.js', style: { bottom: 20,  left: -20  } },
              { label: 'TypeScript',      style: { bottom: 80,  right: -35 } },
              { label: 'Tailwind CSS',    style: { top: 55,     right: -25 } },
              { label: 'HTML & CSS',      style: { top: 145,    left: -35  } },
              { label: 'UI/UX Design',    style: { bottom: 100, left: -15  } },
              { label: 'Go (learning)',   style: { top: 10,     left: 90   } },
            ].map(({ label, style }) => (
              <div key={label} className="about-tag" style={style}>{label}</div>
            ))}
          </div>

          {/* ── Text side ── */}
          <div>
            <div className="label" style={{ color: 'var(--amber)' }}>About Me</div>
            <h2 className="section-title white">
              Who is <span className="italic">Silvana Njeru?</span>
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
              I&apos;m a Computer Science graduate specializing in
              frontend development. I build responsive, accessible web interfaces
              using <strong style={{ color: 'white' }}>React, Next.js, TypeScript</strong> and{' '}
              <strong style={{ color: 'white' }}>Tailwind CSS</strong> writing
              code that is clean, readable, and built to last. I&apos;m also currently
              expanding into <strong style={{ color: 'white' }}>Go</strong>, growing
              my range across the stack.
            </p>

            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
              I care deeply about the details; from consistent spacing to smooth
              interactions, because the quality of a UI reflects the quality of
              the team behind it. I&apos;ve completed my studies and am now awaiting
              graduation, actively seeking <strong style={{ color: 'white' }}>frontend
              internships and entry-level roles</strong> where I can contribute from day one.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
              {[
                {
                  icon: <BsLightningChargeFill size={15} />,
                  text: 'Fast learner; I pick up new frameworks and tools quickly',
                },
                {
                  icon: <BsPalette2 size={15} />,
                  text: 'Detail-oriented; pixel-perfect UI is not optional for me',
                },
                {
                  icon: <BsCodeSlash size={15} />,
                  text: 'I write clean, maintainable code that teams can build on',
                },
                {
                  icon: <BsPeopleFill size={15} />,
                  text: 'Collaborative; I thrive in team environments and pair well',
                },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 32, height: 32,
                    background: 'rgba(244,160,0,0.15)',
                    borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--amber)', flexShrink: 0,
                    marginTop: 1,
                  }}>
                    {icon}
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.65 }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <a href="/cv.pdf" className="btn btn-amber" download="Silvana_Njeru_CV.pdf">
                <HiDownload size={15} />
                Download CV
              </a>
              <a href="#contact" className="btn btn-outline-white">
                Get in Touch
                <HiArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}