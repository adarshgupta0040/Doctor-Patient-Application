import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import Signup from './Components/LoginSignup/Signup';
import './App.css';
import Login from './Components/LoginSignup/Login';
import Home from './Components/LoginSignup/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
