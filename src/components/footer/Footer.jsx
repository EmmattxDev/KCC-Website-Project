import React from 'react';
import { FaClock, FaEnvelopeOpen, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Form } from '../';


function Footer() {
  return (
    <section className='bg-blue-600 contact'>

      <div className='container m-auto px-5 pt-32 pb-32 sm:px-6 lg:px-8 lg:w-screen h-full'>

        <div className='mb-20'>
          <h1 className='relative line-bottomWhite text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl'>Contact Us</h1>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
          
          <div className='flex flex-col justify-start items-start w-full px-2 sm:pr-2 sm:pl-5 pb-8 sm:pb-0 mr-0 md:mr-3.5 mb-3.5 md:mb-0 text-white'>

            <div>

              <div className='Nap'>
                <div>
                  <FaLocationArrow />
                </div>

                <div className='Nap-info'>
                  <p>P.O.BOX 22,<br/> Kingdom College phase 1 road plaza,<br/> Ozu-Abam, Abia State, Nigeria.</p>
                  <br/>
                </div>
              </div>

              <div className='Nap'>
                <div>
                  <FaLocationArrow />
                </div>

                <div className='Nap-info'>
                  <p>42 Mbaise road,<br/> Opposite Uzil primary school,<br/> Owerri, Imo State, Nigeria.</p>
                  <br/>
                </div>
              </div>
            </div>

            

            <div className='Nap'>
              <div><FaPhoneAlt /></div>
              <div className='Nap-info'>
                <p>
                  <Link to='tel:+2348166273795'>
                    <span>+2348166273795,  </span>
                  </Link>
                  
                  <Link to='tel:+2348126494894'>
                    <span>+2348126494894</span>
                  </Link>
                </p>
              </div>
            </div>
            
            <div className='Nap'>
              <div><FaEnvelopeOpen /></div>
              <div className='Nap-info'>
                <Link to="mailto:kgdcollegecomputers@gmail.com">
                  <h2>kgdcollegecomputers@gmail.com</h2>
                </Link>
              </div>
            </div>


            <div className='Nap'>
              <div><FaClock /></div>
              <div className='Nap-info'><p><span className='font-semibold text-xl'>Office Hours:</span> 8:00am - 10:00pm</p></div>
            </div>
            
          </div>

          <Form className='ml-0 md:ml-3.5 mt-3.5 md:mt-0'/>
          
        </div>

      </div>

    </section>
  )
}

export default Footer