import logo from './logo.svg';
import './App.css';

// ^ React boilerplate imports
// jjj imports v
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// components:
import Header from './components/header/index.js';
import Drill from './components/drill/index.js';
import Roll from './components/roll/index.js';
import Submit from './components/submit/index.js';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Drill />
      <Roll />
      <Submit />
      </Router>
    </div>
  );
}

export default App;
