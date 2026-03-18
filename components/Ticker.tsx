import { TbAsterisk } from 'react-icons/tb'

const items = [
  'Web Development', 'UI/UX Design', 'React & Next.js',
   'Data Structures & Algorithms',
  'TypeScript', 'Node.js', 'SQL Databases',
  'Git & GitHub', 'Problem Solving', 'Clean Code',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div className="ticker-item" key={i}>
            <TbAsterisk size={16} />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}