import React, { useEffect, useState } from 'react'
import './NewsCard.css'


const NewsCard = ({ ACard }) => {


  const formatDate = (apiDate) => {
    const options = { month: 'short', day: 'numeric' };
    const date = new Date(apiDate);
    return date.toLocaleDateString('en-US', options);
  };


  return (
    <div className='card container'>
      <div className='card_image-container'>
        <img src={ACard?.imageUrl}/>
        <div className='date'> {formatDate(ACard.published)} </div>
      </div>
      <div className='card-body'>
        <p className='category'>{ACard?.category} </p>
        <p className='title'>{ACard?.title}</p>
        <p className='content'> {ACard?.content} </p>
      </div>
    </div>
  )
}

export default NewsCard