import './App.css';
import Navbar from './components /navbar';
import Hero from './components /hero';
import Skills from './components /skills';
import Educations from './components /educations';
import Services from './components /services';
import Work from './components /work';
import Contact from './components /contact ';
import { useRef } from 'react';

function App() {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const educationsRef = useRef(null);
  const servicesRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'hero') heroRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'skills') skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'educations') educationsRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'services') servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'work') workRef.current.scrollIntoView({ behavior: 'smooth' });
    if (section === 'contact') contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar onNavigate={scrollToSection} />
      <div ref={heroRef}><Hero /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={educationsRef}><Educations /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={workRef}><Work /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
  );
}

export default App;