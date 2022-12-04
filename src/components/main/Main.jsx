import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import  company  from "../../images/02.jpg";

function main() {
  return (
    <>
      <section className='bg-slate-200'>

        <div className="container m-auto px-5 sm:px-6 lg:px-8 lg:w-screen h-screen flex flex-col gap-y-20 md:flex-row justify-center items-center md:gap-40">

          <div className='md:w-2/5 w-3/4 relative box-d1 box-d2'>
            <img src={company} className='md:max-w-full img-width' alt="company building; company office" />
          </div>

          <div className='md:w-1/ relative about-div flex flex-col item-center'>
            <h1 className='relative about-text text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl md:text-6xl'>
              <span className='absolute text-slate-300 text-6xl sm:text-7xl md:text-8xl left-0 -top-9 md:-left-8 md:-top-9 quote-ind1'>
                <FaQuoteLeft />

              </span>
              We Help Build A Future
              
            </h1>

            <p className='relative mt-3 text-base text-blue-500 text-opacity-70 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam illo delectus, obcaecati natus sit voluptatum provident nemo deleniti, illum quaerat, exercitationem nostrum cupiditate error earum beatae placeat nisi rem quod quibusdam dignissimos sunt laboriosam ipsa. Doloremque reprehenderit nihil nostrum eum.
            
              <span className='absolute font-bold tracking-tight text-slate-300 text-6xl sm:text-7xl md:text-8xl quote-ind -right-1 -bottom-9 quote-ind2'>
                <FaQuoteRight />

              </span>
            </p>

            <Link to='/about' className='btn btn-link mt-5'>Learn more</Link>

          </div>

        </div>
        
      </section>

      <section className='bg-blue-600'>
        <div className="container m-auto w-full lg:w-screen px-5 sm:px-6 lg:px-8 lg:pt-10 lg:pb-5 h-screen flex flex-col justify-start items-center">

          <div className=''>

            <div className="card-group">
              <div className='card'>card 1</div>
              <div className='card'>card 2</div>
              <div className='card'>card 3</div>
              <div className='card'>card 4</div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default main