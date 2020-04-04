import React,{useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/card';
import blogPost from '../../data/blog.json';

const BlogPost = (props) => {
  const [post,setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle:"",
    slug:"",
    postedOn:"",
    author:"",
    blogImage:"",
    blogText:""
  });
  const [postId,setSlug] = useState('');

  useEffect(()=>{
    const slug = props.match.params.slug;
    const post = blogPost.data.find(post => post.slug == slug);
    setPost(post);
    setSlug(slug);
  },[post,props.match.params.slug]);

  if(post.blogImage == "")return null;

  return (
    <div className = "blogpostcontainer">
      <Card>
        <div className = "blogheader">
          <span className = "blogcategory">{post.blogCategory}</span>
          <h1 className = "posttitle">{post.blogTitle}</h1>
          <span className ="postedby">Posted on {post.postedOn} by {post.author}</span>
        </div>

        <div className = "postimagecontainer">
          <img src = {require(`../../blogImages/`+post.blogImage)} alt= "Post Image"/>
        </div>

        <div className = "postcontent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
      </div>

      </Card>

    </div>
  )
}

export default BlogPost
