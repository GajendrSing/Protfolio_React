import React from 'react'
import "./DestinationStyle.css"
import Mountain1 from "../Asset/1.jpg"
import Mountain2 from "../Asset/2.jpg"
import Mountain3 from "../Asset/3.jpg"
import Mountain4 from "../Asset/4.jpg"


function DesinationData(props) {
  return (
    <div className={props.className}>
    <div className='des-text'>
        <h2>{props.heading}</h2>
        <p>
        {props.text}
        </p>
    </div>
    <div className='image'>
        <img alt='Mountan-img' src={props.img1}/>
        <img alt='Mountan-img' src={props.img2}/>
    </div>
</div>
  )
}

export default DesinationData