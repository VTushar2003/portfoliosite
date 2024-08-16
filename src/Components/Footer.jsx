import React from 'react'
import PopupGfg from './PopUpForm'

function Footer() {
  return (
    <div className='bg-[#0A0A0A] w-[full] h-[25em] flex items-center justify-center' >
      <footer className=' w-[65%] pb-[40px] '>
        <div><h1 className='font-[GRIFTER] text-[2rem]'>Intrested to work with me?</h1></div>
        <div className='flex gap-[10px] pt-[30px] text-[1.5rem]'><span className='text-[#666666]'>Drop a message to</span><PopupGfg /></div>
      </footer>
    </div>
  )
}

export default Footer
