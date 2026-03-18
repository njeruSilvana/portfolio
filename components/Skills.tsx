import {
  SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs,
  SiPython, SiExpress, SiPostgresql, SiMongodb,
  SiGit, SiGithub, SiFigma, SiFirebase,
  SiVercel, SiLinux,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const categories = [
  {
    name: 'Frontend',
    skills: [
      { icon: <SiHtml5 />,       name: 'HTML5' },
      { icon: <SiCss />,        name: 'CSS3' },
      { icon: <SiJavascript />,  name: 'JavaScript' },
      { icon: <SiTypescript />,  name: 'TypeScript' },
      { icon: <SiReact />,       name: 'React' },
      { icon: <SiNextdotjs />,   name: 'Next.js' },
      { icon: <SiTailwindcss />, name: 'Tailwind' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { icon: <SiNodedotjs />,   name: 'Node.js' },
      // // { icon: <SiPython />,      name: 'Python' },
      // { icon: <SiExpress />,     name: 'Express' },
      { icon: <SiPostgresql />,  name: 'PostgreSQL' },
      { icon: <SiMongodb />,     name: 'MongoDB' },
      // { icon: <SiFirebase />,    name: 'Firebase' },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { icon: <SiGit />,         name: 'Git' },
      { icon: <SiGithub />,      name: 'GitHub' },
      { icon: <SiFigma />,       name: 'Figma' },
      { icon: <VscVscode />,     name: 'VS Code' },
      { icon: <SiVercel />,      name: 'Vercel' },
      // { icon: <SiLinux />,       name: 'Linux' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="label" style={{ justifyContent: 'center' }}>My Toolkit</div>
          <h2 className="section-title">
            Exploring the <span className="italic">Tools</span>
            <br />Behind My Code
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 480, margin: '0 auto' }}>
            Technologies I&apos;ve been working with as a CS student and aspiring developer.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {categories.map(({ name, skills }) => (
            <div key={name}>
              <div className="skill-cat-title">{name}</div>
              <div className="skills-grid">
                {skills.map(({ icon, name: sname }) => (
                  <div key={sname} className="skill-card">
                    <div className="skill-icon">{icon}</div>
                    <div className="skill-name">{sname}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}