import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';


const Training = () => {
  return (
    <>
      <main>
        <section className='bg-white'>
          <div className='section-div-box'>


            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative'>

              <div className='w-full'>

                <div className='mb-20'>
                  <h1 className='relative line-bottomBlue text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl md:text-6xl'>Our Training</h1>
                </div>

                <p className='text-slate-600'>With our man track -<span className='text-blue-600 text-lg font-semibold'>"Get Skill, Get Job"</span> we are on the mission to impact, mobilize and empower the <span className='text-blue-600 text-lg font-semibold'>Youths</span>, training them through our <span className='text-blue-600 text-lg font-semibold'>Up-to-date</span> and <br/><span className='text-blue-600 text-lg font-semibold'>In-demand</span> skills acquisition <span className='text-blue-600 text-lg font-semibold'>Programme</span> so that they can have an essence of <span className='text-blue-600 text-lg font-semibold'>Accomplishment</span> in building a <span className='text-blue-600 text-lg font-semibold'>Brighter Future</span> for themselves and the society at large. Here are a some of the trainings we offer.</p>

                <Link to='/services' className='btn btn-link mt-10 flex w-fit items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:hover:scale-95 md:py-4 md:px-10 md:text-lg'>See More <FaArrowCircleRight className='ml-2'/></Link>
              </div>

              <div className='flex flex-col justify-center items-center gap-x-6 xs:gap-y-6 mt-5 pt-5 relative'>

                <div className='training-cards'>

                  <div className='training-card'>Computer Fundamentals</div>

                  <div className='training-card'>Digital Marketing</div>

                  <div className='training-card'>AutoCAD and ArchiCAD</div>

                </div>

                <div className='training-cards'>

                  <div className='training-card'>Office Packages</div>

                  <div className='training-card'>Graphics & UI/UX<br/> Design</div>

                  <div className='training-card'>Web & Mobile App Development</div>

                </div>
                
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Training