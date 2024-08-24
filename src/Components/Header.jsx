import React, { useState } from 'react';
import "./Componentscss/Header.css";
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className='w-full h-[5em]'>
        <nav className='flex justify-between items-center h-full px-4 md:px-8'>
          <h2 className='text-[1.2rem] text-[#C1C1C1]'>
            <i className="ri-mail-line mr-[8px] text-[#DCFF7E]"></i>
            <a id="mail" href="mailto:tusharvaghela601@gmail.com">Contact@TusharVaghela</a>
          </h2>

          <button
            className='block md:hidden text-[#DCFF7E] text-2xl'
            onClick={toggleMenu}
          >
            <i className={`ri-menu-line ${isMenuOpen ? 'hidden' : 'block'}`}></i>
            <i className={`ri-close-line ${isMenuOpen ? 'block' : 'hidden'}`}></i>
          </button>

          <ul className={`flex md:flex-row md:flex md:space-x-6 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#projects" smooth>Projects</Link></li>
            <li><Link to="#skills">Skills</Link></li>
            <li><a href='/src/assets/resume.pdf' download="TusharResume.pdf" target='_blank' className='text-[#DCFF7E]'>My Resume<i className="ri-arrow-right-up-fill text-[#DCFF7E]"></i></a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
