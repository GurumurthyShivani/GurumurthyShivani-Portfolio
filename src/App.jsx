import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Achievement from "./pages/Achievements";
import Contact from "./pages/Contacts";

function App() {
  return (
    <div className="bg-[color:var(--color-ink)]">
      <Navbar />

      <Home />
      <About />
      <Education/>
      <Skills />
      <Projects />
      <Experience />
      <Achievement />
      <Contact />
    </div>
  );
}

export default App;