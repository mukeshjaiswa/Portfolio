
import './App.css';

import Home from './component/Home';
import Navbar from './component/Navbar';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Footer from './component/Footer';

function App() {
  useEffect(() => {
    Aos.init();
  
   
  }, [])
  
  
  return (
    <>
    <Navbar/>
   
    <div className='ml-4 mx-auto  '>

    <Home/>
    <About className=''/>
    <Skills className=''/>
    <Projects/>
    <Contact/>
    </div>
   
  
    </>
  );
}

export default App;
