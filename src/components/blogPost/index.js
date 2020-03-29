import React,{useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/card';
import blogPost from '../../data/blog.json';

const BlogPost = (props) => {
  const [post,setPost] = useState({});
  const [postId,setPostId] = useState('');

  useEffect(()=>{
    const postId = props.match.params.postId;
    const post = blogPost.data.find(post => post.id == postId);
    setPost(post);
    setPostId(postId);
  },[post,props.match.params.postId]);

  return (
    <div className = "blogpostcontainer">
      <Card>
        <div className = "blogheader">
          <span className = "blogcategory">Feature</span>
          <h1 className = "posttitle">{post.blogTitle}</h1>
          <span className ="postedby">Posted on July 21,2016 bySora Blogging Tips</span>
        </div>

        <div className = "postimagecontainer">
          <img src = {require('../../blogImages/1.jpg')} alt= "Post Image"/>
        </div>

        <div className = "postcontent">
          <h3>Post Title</h3>
          <p>Lorem ipsim</p>
      </div>

      </Card>

    </div>
  )
}

export default BlogPost
