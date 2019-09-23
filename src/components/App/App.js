import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainContent from '../MainContent/MainContent'
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <MainContent/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
