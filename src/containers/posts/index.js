import React from 'react';
import './style.css';
import BlogPost from '../../components/blogPost';
import SideBar from '../../components/sidebar';
import Layout from '../../components/layout';

const Post = (props) => {

  return (
      <Layout>
        <BlogPost {...props}/>
      </Layout>
  )
}

export default Post
