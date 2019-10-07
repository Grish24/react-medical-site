import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Content from '../Content/Content'
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Content/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
