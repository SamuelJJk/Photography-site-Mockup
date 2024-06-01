import React from 'react'

function Hero() {
  return (
    <div className='hero'>
      <video className='splash'  width='100%' height='100%'  autoPlay="autoplay"  muted loop>
        <source src='/splashVid.mp4' type='video/mp4'/>
      </video>
    </div>
  )
}

export default Hero
