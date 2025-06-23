import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import About from './pages/About';
import Skill from './pages/Skill';
import Projects from './pages/Project';
import Education from './pages/Education';
import Contact from './pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/profile' element={<Profile />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/skill' element={<Skill />}/>
    <Route path='/project' element={<Projects />}/>
    <Route path='/education' element={<Education />}/>
    <Route path='/contact' element={<Contact />}/>
  </Routes>
    
  </BrowserRouter>
);

