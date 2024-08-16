import React from 'react'
import "./Componentscss/Animatedtext.css"
import { TypeAnimation } from 'react-type-animation'
import scroll from  "../assets/Scroll.webp"


const AnimatedGif = ({src,alt})=>{
        return <img width="60px" src={src} alt={alt}/>;
};
function AnimatedText() {

  return (
    <div className=' flex flex-col items-center gap-[10px] h-[25em]'>
      <div className='text-[2.2rem] font-bold font-[GRIFTER]' ><h1>Hi, I'm Tushar</h1></div>
      <div className='text-[1.2rem] text' >
      <TypeAnimation
        sequence={[
          "Front-End Developer",
          1000,
          "Back-end Developer",
          1000,
          "Full-Stack Developer",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ color : "#DCFF7E" , fontWeight : "Bold" , fontFamily : "GRIFTER"}}
      />
      </div>
      <div className='text-[1.3rem] font-semibold'>Design & Build Websites With ReactJS</div>
      <div className='socialmedia'>
      <a aria-label='Twitter' href="https://x.com/V_Tushar2003" target='blank' ><i className="ri-twitter-x-line"></i></a>

      <a aria-label="Threads" href="https://www.threads.net/@v.tushar_2003?xmt=AQGzHLMoyabyRxpbVhlzmXPG-l0jT6fREWnMXaT66mtQH8I" target='blank'>
        <i className="ri-threads-line"></i></a>

      <a aria-label='Linkedin' href="https://www.linkedin.com/in/visitme-tushar-vaghela/" target='blank'><i className="ri-linkedin-fill"></i></a>
      </div>
      <div className='m-auto  scroll' ><AnimatedGif src={scroll} alt="scroll"/></div>
    </div>
  )
}

export default AnimatedText
