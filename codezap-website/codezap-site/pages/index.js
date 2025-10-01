import Hero from '../components/Hero'
import Services from '../components/Services'
import Solutions from '../components/Solutions'
import WhyChooseUs from '../components/WhyChooseUs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <Services />
      <Solutions />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  )
}
