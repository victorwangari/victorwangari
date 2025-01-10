import logo from './logo.svg';
import './App.css';
import Navbar from './components /navbar';
import Hero from './components /hero';
import Skills from './components /skills';
import Educations from './components /educations';
import Services from './components /services';
import Work from './components /work';
import Contact from './components /contact ';

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Skills/>
      <Educations/>
      <Services/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
