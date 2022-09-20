import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import About from './components/About/About'
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <div className='App'>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/resume' element={<Resume />}/>
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
