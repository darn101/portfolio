import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <div className='bg-black'>

        /*  Home ----------------- */
        <NavBar />
        <SocialLinks />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />

        /*  About -----------------*/



      /*  Portfolio -----------------*/

      </div>

    </>
  )
}

export default App
