import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Products from './components/Products';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Content />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
