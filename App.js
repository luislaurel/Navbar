import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Profile';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<Products/>} />
          <Route path='/messages' element={<Reports/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
