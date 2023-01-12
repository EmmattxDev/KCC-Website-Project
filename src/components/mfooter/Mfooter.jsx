import React from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../menu/Menu';
import {blogLists} from '../lists/Lists';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';


function Mfooter() {
  return (
    <>
      <footer className='bg-slate-200'>
        <div className="section-div-box flex flex-col gap-7">

          <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-end items-start  gap-7 text-slate-600'>

            <div className=''>
              <Link to='/'>
                <h1 className="text-blue-600 text-2xl hover:text-blue-700 hover:scale-95 font-extrabold">
                  KCC
                </h1>
              </Link>
              <p className='py-1.5'>A place to get all the essentials you need<br/> to build and grow your business.<br/> We also equip you with in-demand skills<br/> to thrive in your career.</p>
            </div>

            <div className='flex flex-col text-slate-600'>
              <h3 className='font-semibold text-lg text-blue-700'>Recent Blog Post</h3>
              <ul>
                {blogLists.map((list, index) => {


                  return (

                    <li key={index} className='list-none px-1 py-1'>
                      <Link to={list.url} className='cursor-pointer'>

                        {list.title}

                      </Link>
                    </li>


                  )})
                }
    
              </ul>
            </div>

            <div className='flex flex-col text-slate-600'>

              <h3 className='font-semibold text-lg text-blue-700'>Quick Links</h3>
              <ul>
                {menuItems.map((menu, index) => {


                  return (

                    <li key={index} className='list-none px-1'>
                      <Link to={menu.url} className='cursor-pointer'>

                        {menu.title}

                      </Link>
                    </li>


                  )})
                }

              </ul>
            </div>

          </div>

          <div className='flex flex-row justify-start sm:justify-center items-center social-links'>
            <div className='social-link'><FaFacebook/></div>
            <div className='social-link'><FaLinkedin/></div>
            <div className='social-link'><FaTwitter/></div>
            <div className='social-link'><FaYoutube/></div>
          </div>

          <div className=''>
            <div className='flex flex-col gap-y-3 sm:flex-row sm:px-1 sm:justify-center pb-5'>
              <a href="http://" className='guide-link'><h4>Privacy Policy</h4></a>
              <a href="http://" className='guide-link'><h4>Terms & Conditions</h4></a>
              <a href="http://" className='guide-link'><h4>About & Supports</h4></a>
              
            </div>

            <div className='flex flex-row justify-center text-slate-600'>
              <p className='text-center'>&copy; {new Date().getFullYear()} Kingdom College Computers. All Rights Reserved. Coded by <a target='_blank' rel="noreferrer" href='https://github.com/EMMATTX' className='hover:text-blue-600 underline font-semibold'>EmmattxDev</a></p>
            </div>
          </div>
        </div>
          
      </footer>
    </>
  )
}

export default Mfooter