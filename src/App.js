import React from 'react';
import './App.css';
import Nav from "./components/Nav.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
