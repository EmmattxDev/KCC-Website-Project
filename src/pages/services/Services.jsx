import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowCircleRight, FaMicrosoft, FaSatelliteDish, FaPaintBrush, FaGlobe } from 'react-icons/fa';
import  company  from "../../images/02.jpg";

function Services() {
  return (
    <>
     <main>
       {/* Services section for homepage */}
       <section className='bg-slate-200'>

          <div className="section-div-box">

            <div className='mb-10'>
              <h1 className='relative line-bottomBlue text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl md:text-6xl'>Our Services</h1>
            </div>
            
            <div className='mb-20'>
              <p className='text-slate-600'>We're dedicated and deligent towards making your business grow and reaching the height you desired it to be, we provide you these services through out the stages of your business.</p>
            </div>

            <div className='flex flex-col justify-center items-center'>

              <div className="card-group">

                <div className='card'>
                  <img src={company} alt="" className='max-w-full'/>
                  <div className='flex flex-col justify-start items-start text-left px-2 pt-6 pb-2'>
                    <FaMicrosoft className='card-icon'/>
                    <h3 className='text-lg md:text-xl lg:text-2xl font-bold'>Microsoft Office</h3>
                  </div>
                  <p className='px-2 pb-8 pt-1 text-sm sm:text-base md:text-lg text-blue-500'>We help organize your ideas, proposals, reports, portfolios, research findings, records, registers etc... and put them into a succinct writing with professional look.</p>
                </div>

                <div className='card'>
                  <img src={company} alt="" className='max-w-full'/>
                  <div className='flex flex-col justify-start items-start text-left px-2 pt-6 pb-2'>
                    <FaSatelliteDish className='card-icon'/>
                    <h3 className='text-lg md:text-xl lg:text-2xl font-bold'>Digital Marketing</h3>
                  </div>
                  <p className='px-2 pb-8 pt-1 text-sm sm:text-base md:text-lg text-blue-500'>We got you covered in your business, supplying you with the digital tools you need to engage more leads, build trust and turn them into loyal customers. Empower your business</p>
                </div>

                <div className='card'>
                  <img src={company} alt="" className='max-w-full'/>
                  <div className='flex flex-col justify-start items-start text-left px-2 pt-6 pb-2'>
                    <FaPaintBrush className='card-icon'/>
                    <h3 className='text-lg md:text-xl lg:text-2xl font-bold'>Graphic Design</h3>
                  </div>
                  <p className='px-2 pb-8 pt-1 text-sm sm:text-base md:text-lg text-blue-500'>Build your personal and business brand to make you stand among the crowd in your niche, create a super long lasting impression on your prospects and customers</p>
                </div>

                <div className='card'>
                  <img src={company} alt="" className='max-w-full'/>
                  <div className='flex flex-col justify-start items-start text-left px-2 pt-6 pb-2'>
                    <FaGlobe className='card-icon' />
                    <h3 className='text-lg md:text-xl lg:text-2xl font-bold'>Web UI/UX Design</h3>
                  </div>
                <p className='px-2 pb-8 pt-1 text-sm sm:text-base md:text-lg text-blue-500'>Top notch digital-shop(website) is what we know how to do and do it well, we'll design a visual appealing website for your business reinforcing your brand all along.</p>
                </div>
                
              </div>

              <div>
                <Link to='/services' className='btn btn-link mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:hover:scale-95 md:py-4 md:px-10 md:text-lg'>Learn More <FaArrowCircleRight className='ml-2'/></Link>
              </div>
            </div>

          </div>

          <div className='curve-bg'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#93c5fd" fill-opacity="1" d="M0,64L80,90.7C160,117,320,171,480,170.7C640,171,800,117,960,128C1120,139,1280,213,1360,250.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
          </div>

        </section>
     </main>
    </>
  )
}

export default Services