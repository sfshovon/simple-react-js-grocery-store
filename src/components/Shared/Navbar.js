import React from 'react';
import logo from '../../images/logo.png';
import CustomLink from './CustomLink';

const Navbar = () => {
  return (
    <header className="bg-gray-50 sticky top-0 z-50 border-b flex items-center justify-between p-4 pb-0 shadow-lg md:pb-2">
      <div className="flex items-center md:mb-0 justify-between">
        <img className="w-28 h-14"src={logo} alt="Logo"/>    
      </div>
      <nav>
        <ul className="flex justify-center items-center">
          <li className="md:ml-4">
            <CustomLink to="/" className="no-underline text-dark font-bold md:border-none md:mx-5 md:p-0 md:text-lg hover:bg-violet-200 rounded-full p-2"> Shop </CustomLink>
          </li>
          <li className="md:ml-4">
            <CustomLink to="/about" className="no-underline text-dark font-bold md:border-none md:mx-5 md:p-0 md:text-lg hover:bg-violet-200 rounded-full p-2"> About </CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;