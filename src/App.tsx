import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="bg-[#fff] h-full w-full max-w-[1440px] mx-auto">
    <Navbar/>
    <HeroSection/>
    <Footer/>
    </div>
  )
}

export default App
