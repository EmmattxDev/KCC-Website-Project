import React from 'react';
import { Form } from '../';

function Footer() {
  return (
    <footer className='w-full bg-blue-600'>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-7 container m-auto pt-32 pb-24 px-4'>
        
        <Form />
        
        <div className='flex flex-col md:flex-col lg:flex-row justify-between gap-6 w-full lg:px-2'>
          <h3 className='footer-item footer-blog bg-white'>itemB1</h3>
          <h3 className='footer-item footer-blog bg-white'>itemB1</h3>
          
        
        </div>
      </div>
    </footer>
  )
}

export default Footer