import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import  company  from "../../images/02.jpg";


const Gallery = () => {
  return (
    <>
      <section className='bg-blue-300'>
          
        <div className='section-div-box'>

          <div className='mb-20'>
            <h1 className='relative line-bottomBlue text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl md:text-6xl'>Gallery</h1>
          </div>

          <div className='flex flex-col justify-center items-center'>

            <div className='w-80'>
              <img src={company} alt="" className='max-w-full' />
            </div>

            <div>
              <Link to='/gallery' className='btn btn-link mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:hover:scale-95 md:py-4 md:px-10 md:text-lg'>View More <FaArrowCircleRight className='ml-2'/></Link>
            </div>
          </div>
          
        </div>

        <div className='curve-bg'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L80,213.3C160,203,320,181,480,149.3C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
      </section>
  
    </>
  )
}

export default Gallery