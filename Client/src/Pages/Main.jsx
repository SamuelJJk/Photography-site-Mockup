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
      visibility:"hidden"
    },
    image:"",
    //This state determines if the modal is appears or not
  });
  const toggleModal =(imgClicked)=>{
    setDisplayModal((prevState)=>{
      const newToggle = !prevState.toggle
      return{
        ...prevState,
        toggle: newToggle,
        style:{visibility:newToggle?"visible":"hidden"},
        image:imgClicked
      }
    })
  }
  //this func is to toggle the state of true or false for the modal
  return (
    <div className='index'>
      <PhotoDisplay toggleModal={toggleModal} displayModal={displayModal}/>
      <Hero/>
      <Summary/>
      <FeaturedWork toggleModal={toggleModal} />
      <Footer/>
    </div>
  )
}

export default Main
