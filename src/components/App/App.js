import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainContent from '../MainContent/MainContent'
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
        <Header/>
        <MainContent/>
        <Footer/>
    </Router>
  );
}

export default App;
