import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Project from './Pages/Project';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       
      </BrowserRouter>
    </div>
  );
};

export default App;