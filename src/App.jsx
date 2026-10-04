import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ScrollProgress from "./components/animation/ScrollProgress";
import AboutSection from "./components/sections/AboutSection";
import AcademicsSection from "./components/sections/AcademicsSection";
import FacilitiesSection from "./components/sections/FacilitiesSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import CTASection from "./components/sections/CTASection";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/animation/CustomCursor";

function App() {
  const [isDark, setIsDark] = useState(false);

useEffect(() => {
  document.documentElement.classList.toggle("dark", isDark);
}, [isDark]);
  return (
    <>
    <CustomCursor />
    <ScrollProgress />
    <Navbar isDark={isDark} setIsDark={setIsDark} />

      <main>
        <HeroSection />
       <AboutSection/>
       <AcademicsSection />
       <FacilitiesSection/>
       <TestimonialsSection/>
       <CTASection/>
  
      </main>
      <Footer />
    </>
  );
}

export default App;