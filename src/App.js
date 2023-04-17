// import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './Components/Home';
import Add from './Components/Add';
import Edit from './Components/Edit';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from './Components/ContactUs';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path="/create" element={<Add />} />
          <Route  path="/edit" element={<Edit />} />
          <Route  path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
