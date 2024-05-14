
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <div className="mb-20">
        <Banner />
      </div>

      <About />
      <Projects />
    </div>
  );
}

export default App;
