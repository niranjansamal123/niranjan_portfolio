import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Freelance from "./components/Freelance";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Projects />
      <Freelance />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
