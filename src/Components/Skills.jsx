import React from 'react';
import "../Components/Componentscss/Skills.css";

const SkillMeter = () => {
  const skills = [
    { name: 'CSS', level: 6 },
    { name: 'Tailwind', level: 6 },
    { name: 'Javascript', level: 7 },
    { name: 'MongoDB', level: 4 },
    { name: 'Redux', level: 4 },
    { name: 'React', level: 7 },
    { name: 'MySql', level: 5 },
    { name: 'Node.js', level: 6 },
    { name: 'HTML', level: 8 },
    { name: 'Express.js', level: 6 }
  ];

  const maxLevel = 10; // Maximum level to display the dots

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4 sm:p-6 md:p-8 text-white">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div
            class="flex items-center justify-center p-2 cursor-pointer rounded-mdhover:text-neutral-100 font-medium relative z-[9999999999] data-[tooltip]:after:content-[attr(data-tooltip)] data-[tooltip]:after:mt-2 data-[tooltip]:after:text-sm data-[tooltip]:after:invisible data-[tooltip]:after:scale-50 data-[tooltip]:after:origin-top data-[tooltip]:after:opacity-0 hover:data-[tooltip]:after:visible hover:data-[tooltip]:after:opacity-100 hover:data-[tooltip]:after:scale-100 data-[tooltip]:after:transition-all data-[tooltip]:after:absolute data-[tooltip]:after:bg-white data-[tooltip]:after:top-[calc(100%+4px)] data-[tooltip]:after:left-1/2 data-[tooltip]:after:-translate-x-1/2 data-[tooltip]:after:-z-[1] data-[tooltip]:after:px-2.5 data-[tooltip]:after:py-1 data-[tooltip]:after:min-h-fit data-[tooltip]:after:min-w-fit data-[tooltip]:after:rounded-md data-[tooltip]:after:drop-shadow data-[tooltip]:before:mt-2 data-[tooltip]:before:drop-shadow data-[tooltip]:after:text-center data-[tooltip]:after:text-zinc-800 data-[tooltip]:after:whitespace-nowrap data-[tooltip]:after:text-[10px] data-[tooltip]:before:invisible data-[tooltip]:before:opacity-0 hover:data-[tooltip]:before:visible hover:data-[tooltip]:before:opacity-100 data-[tooltip]:before:transition-all data-[tooltip]:before:bg-white data-[tooltip]:before:[clip-path:polygon(50%_0,0_100%,100%_100%)] data-[tooltip]:before:absolute data-[tooltip]:before:top-full data-[tooltip]:before:left-1/2 data-[tooltip]:before:-translate-x-1/2 data-[tooltip]:before:z-0 data-[tooltip]:before:w-3 data-[tooltip]:before:h-[4px]"
            data-tooltip={skill.name}
          >
            <span className="text-sm sm:text-lg font-bold w-20 sm:w-28">{skill.name}</span>
          </div>
          <div className="flex space-x-1">
            {[...Array(maxLevel)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${i < skill.level ? 'bg-[#DCFF7E]' : 'bg-gray-800'}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

function Skills() {
  return (
    <div id='skills' className='w-full h-auto mt-10 flex items-center justify-center flex-col gap-4 md:gap-6 lg:gap-8 py-8'>
      <div className='font-[GRIFTER]  text-[1.5rem] md:text-[2rem] w-[65%] md:w-[65%] '>
        <h1 className='text-[#DCFF7E]'>Skills & Knowledge</h1>
      </div>

      <div className='flex items-center justify-center w-full md:w-[80%] lg:w-[65%]'>
        <SkillMeter />
      </div>
    </div>
  );
}

export default Skills;
