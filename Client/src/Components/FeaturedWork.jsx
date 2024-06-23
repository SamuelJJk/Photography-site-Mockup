import React from 'react'
import PhotoBlock from './PhotoBlock'

function FeaturedWork({toggleModal}) {
  return (
    <div className='featuredCm'>
      <h2 className="title">Feature Work</h2>
      <div className="featuredPhotos">
        <PhotoBlock toggleModal={toggleModal}/>
        <PhotoBlock toggleModal={toggleModal}/>
        <PhotoBlock toggleModal={toggleModal}/>
        <PhotoBlock toggleModal={toggleModal}/>
      </div>
      <div className='featuredCmBtn'>
        <button className="viewGallary">See more..</button>
      </div>
    </div>
  )
}

export default FeaturedWork
