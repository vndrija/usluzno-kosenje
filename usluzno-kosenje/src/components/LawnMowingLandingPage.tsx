import Header from './Header'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Experience from './Experience'
import Contact from './Contact'
import Footer from './Footer'

export default function LawnMowingLandingPage() {
  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}