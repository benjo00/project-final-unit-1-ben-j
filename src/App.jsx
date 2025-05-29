import { useState } from 'react'

import './App.css'
import Home from './components/home'
import Modern from './components/modern'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Ancient from './components/Ancient';
import About from './components/about';
import Footer from './components/footer';
import Header from './components/Header';



function App() {
  

  return (

    <Router>
      
    <div className='App'>
      
    
    {/* tagging this section with "links" allows styling in app.css */}
      <nav id = 'links'>
        <Link to="/">Home</Link>{ " | "}
        <Link to="/modern">Modern</Link>{ " | "}
        <Link to="/modern/ancient">Ancient</Link> {" | "}
        <Link to="/modern/ancient/about">About</Link>
        

    

      </nav>
      <div className='content'>
        <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modern" element={<Modern />} />
        <Route path="/modern/ancient" element={<Ancient />} />
        <Route path="/modern/ancient/about" element={<About />} />
        
        
      </Routes>

 <Footer />
      </div>
   
  
    </div>
    </Router>

    
  );
}

export default App
