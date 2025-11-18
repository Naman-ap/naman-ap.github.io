import { Navigation } from './components/Navigation';
import { StarField } from './components/StarField';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TechnicalSkills } from './components/TechnicalSkills';

function App() {
  return (
    <div className="relative min-h-screen">
      <StarField />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <TechnicalSkills />
        <Blog />
        <Contact />
      </main>
   
    </div>
  );
}

export default App;
