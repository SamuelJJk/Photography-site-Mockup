import React from 'react'

function PhotoDisplay({toggleModal,displayModal}) {
  return (
    <div className='photoDisplay' style={displayModal.style}>
      <div className="photo">
        <img src={displayModal.image} alt="" className="inlargerImg" />
      </div>
      <div className="imgDescription">
        <div className="photoHeader">
            <h2 className='imgTitle'>Title</h2>
            <button className='closeBtn' onClick={()=>{toggleModal()}}>&times;</button>
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
