import React, { useEffect, useState } from 'react'

function PhotoBlock({toggleModal}) {
    const [displayPhoto,setDisplayPhoto]=useState({});

    useEffect(()=>{
        setDisplayPhoto({
            image:"https://plus.unsplash.com/premium_photo-1687653085814-4c138d968688?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        });
    },[]);
  return (
    <div className='photoBlock'>
      <img src={displayPhoto.image} alt="" className="photoBlockImg" onClick={()=>{toggleModal()}}/>
    </div>
  )
}

export default PhotoBlock
