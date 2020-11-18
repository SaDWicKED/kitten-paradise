import React from 'react';
import './card.styles.css';


export function Card (props) {
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${props.kitty.name}?set=set4&size=180x180&bgset=bg1`} alt="kitty"/>
      <h2>{props.kitty.name}</h2>
      <p>{props.kitty.email}</p>
    </div>
  )
}
