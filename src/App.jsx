import Download from "./sections/Download"
import Faq from "./sections/Faq"
import Features from "./sections/Features"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Pricing from "./sections/Pricing"
import Testimonial from "./sections/Testimonial"

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonial />
      <Download />
      <Footer />
    </main>
  )
}

export default App