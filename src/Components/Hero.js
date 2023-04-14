import React from 'react'
import "./HeroStyle.css";
import CarImage from "../Asset/12.jpg";

function Hero(props) {
  return (
    <div className={props.cName}>
      <img alt='heroImg' src={props.heroImage} />
      <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>
          {props.text}
        </p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>

    </div>
  )
}

export default Hero;