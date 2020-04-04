import React,{useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom';
import './style.css'
import Card from '../UI/card'
import blogPost from '../../data/blog.json'

const SideBar = (props) => {
  //arreglo
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const posts = blogPost.data;
    setPosts(posts);
  },[posts]);

  return (
    <div className ="sidebarcontainer" style={{width:props.width}}>
      <Card style = {{marginBottom: '20px',padding:'20px',boxSizing: 'border-box'}}>
        <div className = "cardheader">
          <span>About Us</span>
        </div>
        <div className = "profileimagecontainer">
          <img src="https://pbs.twimg.com/profile_images/1232500295088955392/MrILzm1y_400x400.jpg" alt = "me"/>
        </div>
        <div className = "cardbody">
          <p className = "personalbio">My name is Boss Ass Bitch</p>
        </div>
      </Card>

      <Card style = {{marginBottom: '20px',padding:'20px',boxSizing: 'border-box'}}>
        <div className = "cardheader">
          <span>Social Network</span>
        </div>
      </Card>

      <Card style = {{marginBottom: '20px',padding:'20px',boxSizing: 'border-box'}}>
          <div className = "cardheader">
            <span>Recent Posts</span>
          </div>

          <div className = "recentpostss">

            {
              posts.map(post =>{
                return(
                  <NavLink key={post.id} to={`/post/${post.slug}`}>
                    <div className = "recentposts">
                      <h3>{post.blogTitle}</h3>
                      <span>{post.postedOn}</span>
                    </div>
                  </NavLink>
                );
              })
            }

          </div>



      </Card>

    </div>

  )
}

export default SideBar
