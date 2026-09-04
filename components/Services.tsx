import { HiArrowRight } from 'react-icons/hi'
import { BsCodeSlash, BsPalette2, BsServer, BsGithub } from 'react-icons/bs'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { TbApi } from 'react-icons/tb'

const services = [
  {
    icon: <BsCodeSlash size={22} />,
    title: 'Frontend Development',
    desc: 'Building responsive, pixel-perfect interfaces with React, Next.js, TypeScript, and Tailwind CSS; from reusable component libraries to fully accessible, mobile-first layouts.',
  },
  {
    icon: <BsServer size={22} />,
    title: 'Backend & Database Integration',
    desc: 'Building REST APIs and server-side logic with Node.js, and structuring data with PostgreSQL and MongoDB to power dynamic, data-driven applications.',
  },
  {
    icon: <MdOutlineDashboardCustomize size={22} />,
    title: 'Full-Stack Web Applications',
    desc: 'Shipping complete platforms end to end  dynamic routing, type-safe data handling, and application state management, like an Airbnb-style listings app and a youth-entrepreneurship network connecting founders with investors.',
  },
  {
    icon: <TbApi size={22} />,
    title: 'API & Third-Party Integration',
    desc: 'Connecting frontends to external services and APIs  authentication, data feeds, and other third-party tooling so your product talks to the systems it needs to.',
  },
  {
    icon: <BsPalette2 size={22} />,
    title: 'UI/UX Design',
    desc: 'Translating ideas into clean, intuitive interfaces in Figma, with a focus on accessibility, consistent design systems, and delightful user flows.',
  },
  {
    icon: <BsGithub size={22} />,
    title: 'Collaboration & Deployment',
    desc: 'Working in team environments with Git and pull-request workflows, then shipping and maintaining production sites on Vercel and Netlify.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div className="label">Services</div>
            <h2 className="section-title">
              Services <span className="italic">I Offer</span>
            </h2>
          </div>
          <a href="#contact" className="btn btn-green">
            View All Services
            <HiArrowRight size={15} />
          </a>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
          className="services-grid">
          {services.map(({ icon, title, desc }) => (
            <div key={title} className="card">
              <div className="card-icon">{icon}</div>
              <div className="card-title">{title}</div>
              <div className="card-text">{desc}</div>
              <a href="#contact" className="card-link">
                Learn more <HiArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}