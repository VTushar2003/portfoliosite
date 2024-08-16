import React from 'react'
import "./Componentscss/Banner.css"
import Myprofile from "../assets/Myprofile.jpg"
function Banner() {
  return (
    <>
        <div className='Banner'>
            <div className='myprofile'><img src={Myprofile} alt="ProfilePhoto" /></div>
        </div>
    </>
  )
}

export default Banner
