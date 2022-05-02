import Details from './components/Details'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Partners from './components/Partners'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <Details />
      <Features />
      <Pricing />
      <Partners />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
