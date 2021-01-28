import React from 'react'
import './App.modules.css'
import {BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle';
import Hero from './components/Hero';
import Product from './components/Products';
import {ProductData, ProductDataTwo} from './components/Products/data'
import Feature from './components/Feature'

function App() {
  
    return (
      <Router>
        <GlobalStyle />
        <Hero />
        <Product heading='Choose your fovourite' data={ProductData}/>
        <Feature />
        <Product heading='Sweets for  you' data={ProductDataTwo}/>
      </Router>
    );
  }


export default App;
