import React from 'react';
import './style.css';
import BlogPost from '../../components/blogPost';
import SideBar from '../../components/sidebar';

const Posts = (props) => {
  return (
    <section className = "container">
      <BlogPost/>
      <SideBar/>
    </section>
  )
}

export default Posts
