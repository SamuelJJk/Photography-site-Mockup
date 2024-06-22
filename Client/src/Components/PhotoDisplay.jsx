import React from 'react'

function PhotoDisplay() {
  return (
    <div className='photoDisplay'>
      <div className="photo">
        <img src="https://plus.unsplash.com/premium_photo-1683141237355-d966b653f414?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" alt="" className="inlargerImg" />
      </div>
      <div className="imgDescription">
        <div className="photoHeader">
            <h2 className='imgTitle'>Title</h2>
            <button className='closeBtn'>&times;</button>
        </div>
        <div className="photoBody">
            Hello I'm some text
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default PhotoDisplay
