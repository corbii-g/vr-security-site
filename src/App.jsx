import Navbar          from './components/Navbar.jsx'
import Footer          from './components/Footer.jsx'
import { ScrollProgress, BackToTop } from './components/ScrollUtils.jsx'

import Hero            from './sections/Hero.jsx'
import ProjectSection  from './sections/ProjectSection.jsx'
import HowItWorks      from './sections/HowItWorks.jsx'
import Timeline        from './sections/Timeline.jsx'
import Challenges      from './sections/Challenges.jsx'
import Features        from './sections/Features.jsx'
import Screenshots     from './sections/Screenshots.jsx'
import FaqSection      from './sections/FaqSection.jsx'
import Team            from './sections/Team.jsx'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ProjectSection />
        <HowItWorks />
        <Timeline />
        <Challenges />
        <Features />
        <Screenshots />
        <FaqSection />
        <Team />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
