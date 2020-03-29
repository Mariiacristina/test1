import React, {useState} from 'react'
import './style.css';
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {

  const[search, setSearch] = useState(false);

  const submitSearch=(e) =>{
    e.preventDefault();
    alert('searched');
  }

  const openSearch = () =>{
    setSearch(true);
  }

  const searchClass=search ?'searchinput active': 'searchinput';

  return (
    <div className ="navbar">
      <ul className = "navbarmenu">
        <li><NavLink to ="/">Home</NavLink></li>
        <li><NavLink to ="/about-us">About Us</NavLink></li>
        <li><NavLink to ="/post">Posts</NavLink></li>
        <li><NavLink to ="/contact-us">Contact Us</NavLink></li>
      </ul>
      <div className = "search">
        <form onSubmit={submitSearch}>
          <input className ={searchClass} type = "text" placeholder ="Search"/>
          <img onClick={openSearch} className = "searchicon"src ={require('../../assets/icons/search.png')} alt ="Search"/>
        </form>
      </div>
    </div>
  )
}

export default Navbar
