import React from 'react';
import './App.css';
import Home from './containers/home';
import Header from './components/header';
import Hero from './components/hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactUs from './containers/contactUs'
import Post from './containers/posts'

function App() {
  return (

    <Router>
      <div className="App">
        <Header/>
        <Hero/>
        <Route path="/" exact component={Home}/>
        <Route path ="/contact-us" component ={ContactUs}/>
        <Route path = "/post/:postId" component = {Post}/>
      </div>
    </Router>

  );
}

export default App;
