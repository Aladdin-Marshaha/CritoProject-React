import React from 'react'
import './NewsCard.css'


const NewsCard = ({ ACard }) => {
  return (
    <div className='card container'>
      <div className='card_image-container'>
        <img src={ACard?.imageUrl}/>
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