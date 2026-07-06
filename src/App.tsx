import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { QATesting } from './sections/QATesting';
import { Achievements } from './sections/Achievements';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg-light text-brand-text-primary-light dark:bg-brand-bg-dark dark:text-brand-text-primary-dark selection:bg-brand-accent-indigo/15 dark:selection:bg-brand-accent-indigo/25 selection:text-brand-accent-indigo dark:selection:text-brand-accent-indigo font-sans transition-colors duration-300">
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <QATesting />
        <Achievements />
        <Contact />
      </main>
      
      <ScrollToTop />
    </div>
  );
}

export default App;
