import React from 'react';
import bannerImage from "../assets/bannerImg.png";

const projects = [
  {
    title: "Inventra",
    source: bannerImage,
    address: "https://inventra-brown.vercel.app/",
    summary: "Developed an inventory and invoice management system using the MERN stack."
  },
];

function Projects() {
  return (
    <div id='projects' className='w-full h-auto bg-[rgb(220,255,126)] flex flex-col items-center justify-center py-8'>
      <div className='w-[65%] md:w-[65%] lg:w-[65%]'>
        <div className='mt-[20px] mb-8'>
          <h1 className='text-[2rem] font-[GRIFTER] text-black'>Projects</h1>
        </div>

        <div className='grid gap-8'>
          {projects.map((project, index) => (
            <div key={index} className='shadow-md px-8 sm:px-10 md:px-12 lg:px-14 bg-white rounded-3xl flex items-center '>
              <div className='content w-full md:w-1/2 flex flex-col items-baseline gap-1'>
                <div className='border-l-2 pl-3 border-black ml-0 md:ml-5'>
                  <h1 className='text-[1.2rem] font-[GRIFTER] text-black mt-4'>
                    {project.title}
                  </h1>
                </div>
                <div className='pl-3 text-black text-justify'>
                  <h2 className='mb-3 text-sm'>{project.summary}</h2>
                  <button className='px-3 py-2 border-2 rounded-xl md:px-2 border-black'>
                    <a className='font-semibold' href={project.address} target='_blank' rel="noopener noreferrer">
                      Check Out<i className="ri-arrow-right-up-fill text-black"></i>
                    </a>
                  </button>
                </div>
              </div>
              <div className='w-full md:w-1/2 sm:w-1/2 mt-4 md:mt-0'>
                <img className='object-cover drop-shadow-xl' src={project.source} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
