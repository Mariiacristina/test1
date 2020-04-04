import React from 'react';
import './style.css';
import Sidebar from '../../components/sidebar'
import Card from '../../components/UI/card'
import RecentPost from './recentposts'
import blogData from '../../data/blog.json'
import Layout from '../../components/layout'

const Home = props =>{

  const SideImage = props =>{
    return(
      <div style = {{height:`${props.height}px`}}>
        <img src={props.src} alt = ""/>
      </div>
    );
  }

  const ImageGallary =props => (
    <div className = "gallarypost" style ={props.gallaryStyle}>
      <section style ={{width:props.largeWidth}}>
        <div className ="mainImage">
          <img src={require('../../blogImages/'+props.imagesArray[0])} alt = ""/>
        </div>
      </section>
      <section className ="sideimagewrapper" style ={{width:props.smallWidth}}>

        {
          props.imagesArray.map(image =>
            <SideImage
              height={props.sideImageHeight}
              src={require('../../blogImages/'+image)}
              alt = ""
            />

          )

        }
 
      </section>
    </div>
  );

  const gallaryHeight = 450;
  const gallaryStyle = {
    height: gallaryHeight +'px',
    overflow:'hidden'
  }

  const sideImageHeight = gallaryHeight/3;


  const imgAr = blogData.data.map(post => post.blogImage)

  return (
    <div>
      <Card>
          <ImageGallary
            largeWidth = "70%"
            smallWidth= "30%"
            sideImageHeight= {sideImageHeight}
            gallaryStyle = {gallaryStyle}
            imagesArray ={imgAr}
            />
      </Card>


        <Layout>
          <RecentPost style ={{width:'70%'}}/>
        </Layout>

    </div>

  );
}

export default Home;
