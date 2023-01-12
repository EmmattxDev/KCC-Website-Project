import React, { useState } from "react";
import { menuItems } from "../menu/Menu";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {

  const [open, setOpen] = useState(false);
  // const [click, setClick] = useState(false);
  

  return (
    <nav className='bg-white border-b-2 border-opacity-40 border-slate-400 py-4 px-10 flex flex-row flex-grow flex-shrink-0 justify-between items-center m-auto w-full sticky top-0 left-0 z-10'>
      <div className="mr-16">
        <Link to='/'>
          <h1 className="text-blue-600 text-2xl hover:text-blue-700 font-extrabold">
            KCC
          </h1>
        </Link>
      </div>

      <div onClick={() =>{setOpen(!open)}}  className='ml-auto md:hidden'>
        {open ? <FaTimes className="hover:fill-blue-600 text-3xl" /> : <FaBars className="hover:fill-blue-600 text-3xl" /> } 
      </div>
      
      
      <ul 
      id="navLink" 
      className={`ml-auto md:flex md:flex-row md:flex-wrap bg-white md:static md:w-auto w-full md:z-auto z-[-2] absolute left-0 top-16 cursor-pointer md:pl-0 pl-9 md:pb-0 pb-9 transition-all duration-300 ease-in md:border-t-0 md:border-b-0 md:border-transparent border-t-2 border-b-2 border-b-opacity-40 border-b-slate-400 border-t-blue-600 
      ${open ? 'top-14 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'} `}>
        {menuItems.map((menu, index) => {


          return (

            <li key={index} className='relative list-none px-3 md:my-0 my-7'>
              <Link to={menu.url} className='flex md:flex-row md:justify-center md:items-center text-slate-700 hover:text-blue-600 md:text-base text-xl md:font-semibold transition duration-300 ease-in-out cursor-pointer'>
                <span className="mr-1 menu-icon">{menu.icon}</span>
                {menu.title}
              </Link>
            </li>
        
      
          )})
        }
        
      </ul>

     
    </nav>
  );
};

export default Navbar;