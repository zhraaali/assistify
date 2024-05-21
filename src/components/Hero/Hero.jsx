import React from 'react'
import './Hero.css'
const Hero = (props) => {
  return (
    <div className='zh-hero'>
        <div className='hero'>
        <div className='hero-content'>
        <p>{props.desc1}</p>
            <h1>{props.title}</h1>
            <p>{props.desc2}</p>
        </div>
        
    </div>
    <div className='hero-bottom' style={{backgroundColor:'#0A0E3F'}}>
        <h1> +Assetify قم بالإرتقاء تلقائياً إلى فئة </h1>
    </div>
    </div>
  )
}

export default Hero