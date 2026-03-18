import Navbar       from '../components/Navbar'
import Hero         from '../components/Hero'
import Ticker       from '../components/Ticker'
import Services     from '../components/Services'
import About        from '../components/About'
import Skills       from '../components/Skills'
import Projects     from '../components/Projects'
import Certificates from '../components/Certificates'
import Contact      from '../components/Contacts'
import Footer       from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  )
}