import { useState, useEffect } from "react";
import { SmoothScroll } from "./components/SmoothScroll";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
        {/* Layer 1: Central Blue Glow */}
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_85%)]" />

        {/* Layer 2: Parallax Grid */}
        <div
          className="bg-grid-plus pointer-events-none fixed inset-0 z-0 transition-transform duration-100 ease-out [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_80%)]"
          style={{
            transform: `translateY(-${scrollProgress * 100}px)`,
          }}
        />

        {/* Layer 3: Interactive Content */}
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

        <div
          className={`relative z-10 min-h-screen transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } text-gray-100`}
        >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
