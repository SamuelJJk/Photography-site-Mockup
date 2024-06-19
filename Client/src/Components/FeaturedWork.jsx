import React from 'react'
import PhotoBlock from './PhotoBlock'

function FeaturedWork() {
  return (
    <div className='featuredCm'>
      <h2 className="title">Feature Work</h2>
      <div className="featuredPhotos">
        <PhotoBlock/>
        <PhotoBlock/>
        <PhotoBlock/>
        <PhotoBlock/>
      </div>
      <div className='featuredCmBtn'>
        <button className="viewGallary">See more..</button>
      </div>
    </div>
  )
}

export default FeaturedWork
