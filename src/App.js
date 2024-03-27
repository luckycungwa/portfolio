import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import About from './page/About';
import Skills from './page/Skills';
import Characteristics from './page/Characteristics';
import Experience from './page/Experience';
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className=''>
      {/* <Navbar /> */}
    </div>
    
    <Routes>
      {/* <Route path="/" component={Home} />
      {/* Home route (renders for exact path "/" and sub-paths) */}
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/characteristics" element={<Characteristics />} />
    <Route path="/experience" element={<Experience />} />
    

      {/* handle errors asile */}
       {/* Error route */}
      {/* <Route path="*" element={Home} /> */}
    </Routes>
    </Router>
    
  );
}

export default App;
