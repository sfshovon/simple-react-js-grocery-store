import React from 'react';
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 z-50 bg-green-50 px-5">
      <div className="flex-1">
        <img className="w-28 h-14"src={logo} alt="Logo" />
      </div>
      <div className="flex-none">
        <h1 className="text-xl font-semibold animate-pulse lg:text-3xl">Welcome to Online Grocery Store</h1>
      </div>
    </nav>
  );
};

export default Navbar;