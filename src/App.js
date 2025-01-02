import logo from './logo.svg';
import './App.css';
import Navbar from './components /navbar';
import Hero from './components /hero';
import Skills from './components /skills';
import Educations from './components /educations';

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Skills/>
      <Educations/>
    </div>
  );
}

export default App;
