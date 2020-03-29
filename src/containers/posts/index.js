import React from 'react';
import './style.css';
import BlogPost from '../../components/blogPost';
import SideBar from '../../components/sidebar';

const Post = (props) => {

  return (
    <section className = "container">
      <BlogPost {...props}/>
      <SideBar/>
    </section>
  )
}

export default Post
