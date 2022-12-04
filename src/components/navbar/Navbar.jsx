import React, { useState } from "react";
import { menuItems } from "../menu/Menu";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () =>{

    click === true ? setClick(false) : setClick(true)
  };
  
  return (
    <nav className="bg-white py-4 px-10 flex flex-row flex-grow flex-shrink-0 justify-start items-center m-auto w-full sticky top-0 z-10 border-b-2 border-slate-400 border-opacity-40">
      <div className="mr-16">
        <Link to='/'>
          <h1 className="text-blue-600 text-2xl hover:text-blue-700 hover:scale-95 font-extrabold">
            KCC
          </h1>
        </Link>
      </div>
      <div className="mx-auto">
        <ul id="navLink" className='md:flex md:flex-row md:flex-wrap hidden'>
          {menuItems.map((menu, index) => {


            return (

              <li key={index} className='relative list-none px-3'>
                <Link to={menu.url} className='flex flex-row justify-center items-center text-slate-700 hover:text-blue-600 hover:scale-95 text-base font-semibold transition duration-300 ease-in-out cursor-pointer'>
                  <span className="mr-1 menu-icon">{menu.icon}</span>
                  {menu.title}
                </Link>
              </li>
          
        
            )})
          }
          
        </ul>
      </div>

      <div onClick={handleClick} className='md:hidden block'>
        <FaBars className="hover:fill-blue-600" setClick={false}/>
        <FaTimes className="hover:fill-blue-600" setClick={true}/>
      </div>
      
    </nav>
  );
};

export default Navbar;