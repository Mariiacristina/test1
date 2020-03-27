import React from 'react';
import './style.css';
import Card from '../UI/card';
import Logo from '../logo';

const Hero = (props) => {
  return (
    <div>
      <Card>
        <div style={{padding:'50px 0'}}>
          <Logo/>
        </div>
      </Card>

    </div>
  )
}

export default Hero
