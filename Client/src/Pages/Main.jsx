import React, { useState } from 'react'
import '../Style/Main.css'
import Hero from '../Components/Hero'
import Summary from '../Components/Summary'
import Footer from '../Components/Footer'
import FeaturedWork from '../Components/FeaturedWork'
import PhotoDisplay from '../Components/PhotoDisplay'

function Main() {
  const [displayModal,setDisplayModal]=useState({
    toggle:false,
    style:{
      display:"flex"
    }
  });
  const toggleModal =()=>{
    setDisplayModal({toggle:prevState =>!prevState})
    if(displayModal.toggle){
      setDisplayModal({style:{display:"flex"}})
    }else{
      setDisplayModal({style:{display:"none"}})
    }
  }
  return (
    <div className='index'>
      <PhotoDisplay toggleModal={toggleModal} displayModal={displayModal}/>
      <Hero/>
      <Summary/>
      <FeaturedWork/>
      <Footer/>
    </div>
  )
}

export default Main
