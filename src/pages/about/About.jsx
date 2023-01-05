import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowCircleRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import  company  from "../../images/02.jpg";

function About() {
  return (
    <>
      <main>
      <section className='bg-white'>

        <div className="section-div-box">

          <div className='mb-20'>
            <h1 className='relative line-bottomBlue text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl md:text-6xl'>About Us</h1>
          </div>

          <div className='flex flex-col gap-y-20 md:flex-row justify-center items-center md:gap-20'>

            <div className='lg:w-2/5 md:w-2/4 w-3/4 relative box-d1 box-d2'>
              <img src={company} className='md:max-w-full img-width' alt="company building; company office" />
            </div>

            <div className='md:w-2/4 relative about-div flex flex-col item-center'>
              <h1 className='relative about-text text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl md:text-6xl'>
                <span className='absolute text-slate-300 text-6xl sm:text-7xl md:text-8xl left-0 -top-9 md:-left-8 md:-top-9 quote-ind1'>
                  <FaQuoteLeft />

                </span>
                We Help Build A Future
                
              </h1>

              <p className='relative mt-3 text-base text-blue-500 text-opacity-70 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0'>
                At <span>Kingdom College Computers(KCC</span>) we are strongly committed to growing and advancing the potentials in indivivduals to help them thrive in the ever evolving society of ours.
                <br/><br/>
                Since X years of inception we have helped over 20,000+ indivivduals gain in-demand skills and as well get jobs, we have have helped built so many businesses(startups) by providing them with great up-to-date tools to boost their business finance, management and marketing while ensuring a super ROI and Brand reinforcement. 
              
                <span className='absolute font-bold tracking-tight text-slate-300 text-6xl sm:text-7xl md:text-8xl quote-ind -right-1 -bottom-9 quote-ind2'>
                  <FaQuoteRight />

                </span>
              </p>

              <Link to='/about' className='btn btn-link w-fit mt-10 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:hover:scale-95 md:py-4 md:px-10 md:text-lg'>Learn more <FaArrowCircleRight className='ml-2' /></Link>

            </div>
          </div>



        </div>

      </section>
      </main>
    </>
  )
}

export default About