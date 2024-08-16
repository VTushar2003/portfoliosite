import React from 'react'

const workExp = [
  {
    JobDesc: "MERN intern",
    start: "June-2024",
    End: "July-2024",
    Company: "M.A.T.E. - Marvik Academy Of Technical Education",
    Location: "Udaipur",
    Summary: "I interned at Mate, where I developed a full-stack application using the MERN stack. This experience honed my skills in MongoDB, Express.js, React.js, and Node.js, allowing me to create dynamic, responsive, and scalable web applications"
  },

]

function WorkExp() {
  return (
    <>
      <div className='w-full  h-auto mb-10 flex flex-col items-center justify-center'>
        <div className='w-[65%] '>
          <h1 className='font-[GRIFTER] text-[2rem] text-[#DCFF7E]'>Work Experience</h1>
          {workExp.map((index) => {
            return (
              <>
                <div key={index.JobDesc} className='gap-3 rounded-[5px] h-fit pl-[10px] border-y-transparent border-e-transparent  border-4 border-l-[#DCFF7E] mt-[30px] justify-center flex flex-col '>
                  <h1 className='text-[1.2rem] font-[GRIFTER]'>{index.JobDesc} - {index.start}/{index.End}</h1>
                  <h2 className='w-full'>{index.Company} , {index.Location}</h2>

                  <h3 className='text-[#C1C1C1] text-justify'>{index.Summary}</h3>
                </div>
              </>
            )
          })}
        </div>
      </div >
    </>
  )
}

export default WorkExp
