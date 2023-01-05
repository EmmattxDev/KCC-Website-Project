import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight, FaGlobe, FaMicrosoft, FaPaintBrush, FaQuoteLeft, FaQuoteRight, FaSatelliteDish } from 'react-icons/fa';
import { Footer } from '..';
import  company  from "../../images/02.jpg";

function main() {
  return (
    <main>
      {/* About section for homepage */}
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
      
      {/* Gallery section for hompage */}
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

      {/* Training section for hompage */}
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
      
      <Footer />

    </main>
  )
}

export default main