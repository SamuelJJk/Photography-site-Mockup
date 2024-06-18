import React from 'react'

function Hero() {
  return (
    <div className='hero'>
      <img src="https://images.unsplash.com/photo-1717167172109-d4c95ddfa5c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="splash" />
      <div className="heroDiv">
        <div className="heroIntro">Welcome to my Portfilio</div>
        <button className="heroBtn">View my Gallary</button>
      </div>
    </div>
  )
}

export default Hero
