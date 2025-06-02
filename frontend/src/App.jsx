import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  // Scroll to section on location/pathname change
  useEffect(() => {
    const sectionId = location.pathname === "/" ? "home" : location.pathname.slice(1);
    const section = document.getElementById(sectionId);
    if (section) {
      isNavigatingRef.current = true; // set navigating flag
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
        // Reset navigating flag after scroll duration (~500ms)
        setTimeout(() => {
          isNavigatingRef.current = false;
        }, 500);
      }, 100);
    }
  }, [location]);

  // Scroll listener to update URL when manually scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isNavigatingRef.current) return; // skip while navigating programmatically

      const sections = ["home", "about", "portfolio", "contact"];
      let currentSection = "home";

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = id;
            break;
          }
        }
      }

      const targetPath = currentSection === "home" ? "/" : `/${currentSection}`;
      if (location.pathname !== targetPath) {
        navigate(targetPath, { replace: true });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location, navigate]);

  return (
    <div className="flex flex-col font-sans bg-gradient-to-r from-black via-purple-900 to-black">
      <Navbar />
      <main className="flex-grow scroll-smooth">
        <section id="home" className="min-h-screen pt-20 scroll-mt-20 md:min-h-[auto]">
          <Home />
        </section>
        <section id="about" className="min-h-screen pt-20 scroll-mt-20 md:min-h-[auto]">
          <About />
        </section>
        <section id="portfolio" className="min-h-screen pt-20 scroll-mt-20 md:min-h-[auto]">
          <Portfolio />
        </section>
        <section id="contact" className="min-h-screen pt-20 scroll-mt-20 md:min-h-[auto]">
          <Contact />
        </section>
      </main>
      
    </div>
  );
}

export default App;
