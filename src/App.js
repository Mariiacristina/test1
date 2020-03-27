import React from 'react';
import './App.css';
import Home from './containers/home';
import Header from './components/header';
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Home/>
    </div>
  );
}

export default App;
