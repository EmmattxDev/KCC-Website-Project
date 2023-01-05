import React from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
  <>
    <header className='hero'>
      
      <div className="container m-auto pb-8 sm:pb-16 md:pb-20 lg:w-screen lg:pb-28 lg:pt-10 xl:pb-32 overflow-hidden h-screen">
      
        <section className="w-full max-w-7xl lg:h-full pt-8 px-5 sm:px-6 lg:px-8 md:pt-32 lg:pt-10">
          <div className="sm:text-center lg:text-left">

            <h1 className="text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Welcome to</span>
              <span className="block text-white xl:inline"> Kingdom<br/> College Computer Institute</span>
            </h1>

            <p className="mt-3 text-base text-white text-opacity-70 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">A place to get all the essentials you need to build and grow your business. We also equip you with in-demand skills to thrive in your career.</p>

            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <Link to="/about" className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:hover:scale-95 md:py-4 md:px-10 md:text-lg">About Us</Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link to="/contact" className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-100 px-8 py-3 text-base font-medium text-blue-700 hover:bg-blue-200 md:hover:scale-95 md:py-4 md:px-10 md:text-lg">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  </>

  )
}

export default Hero