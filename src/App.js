import React from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Plans from './Plans';
import Feasibility from './Feasibility';
import About from './About';
import Bib from './Bib';

function App() {
  return (
    <Router>
      <div className="content">
        <NavBar class="Sidebar" />
        <Routes>
          <Route exact path="" element={<Home />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Plans" element={<Plans />}></Route>
          <Route exact path="/Feasibility" element={<Feasibility />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Bib" element={<Bib />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
