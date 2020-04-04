import React from 'react'
import './style.css'
import Card from '../../../components/UI/card'

const RecentPost = (props) => {
  return (
    <div style = {props.style}>
      <Card style = {{marginBottom:'20px'}}>
        <div className ="postimagewrapper">
          <img src="https://www.wallpaperflare.com/static/597/224/889/running-dog-nature-water-wallpaper.jpg" alt = ""/>
        </div>

        <div style = {{textAlign: 'center'}}>
          <span>Feature</span>
          <h2>Wolf</h2>
          <span>date 23424 2352342 234234</span>
          <p>habia un avez parrafo qloa asdasdkadnqkjwndkjqnwdkqlnwlekjnqwlejqwneljqwneljqwnelkqwjne</p>
          <button>Read More</button>
        </div>

      </Card>
    </div>
  )
}

export default RecentPost
