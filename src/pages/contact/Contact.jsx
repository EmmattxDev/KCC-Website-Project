import React from 'react'
import { Link } from 'react-router-dom';
import { FaLocationArrow, FaPhoneAlt, FaEnvelopeOpen, FaClock} from 'react-icons/fa';
import { Form } from '../../components';

const Contact = () => {
  return (
    <>
      <main>
        <section className='bg-blue-600 contact'>

          <div className='container m-auto px-5 pt-32 pb-32 sm:px-6 lg:px-8 lg:w-screen h-full'>

            <div className='mb-20'>
              <h1 className='relative line-bottomWhite text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl'>Contact Us</h1>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-7 justify-center'>
              
              <div className='flex flex-col justify-start items-start lg:items-center w-full px-2 sm:pr-2 sm:pl-5 pb-8 sm:pb-0 text-white'>

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

              <Form />
              
            </div>

          </div>

        </section>
      </main>
    </>
  )
}

export default Contact