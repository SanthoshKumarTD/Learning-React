import React from 'react'

function Card(props){    
    return <div className='card'>
        <img className='image' src={props.Image}></img>
        <h1>{props.UserName}</h1>
        <p className='Paragraph'>I am {props.Age} years old</p>
        <button className='Button'>Submit</button>
     </div>
}

export default Card
