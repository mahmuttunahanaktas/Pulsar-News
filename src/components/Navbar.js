import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import MyContext from '../context';
import { IoSettingsSharp } from "react-icons/io5";
import 'react-toastify/dist/ReactToastify.css';
import { usePopup } from '../context';
import { RiAccountCircleLine } from "react-icons/ri";

function Navbar() {
  const { handleCategoryPage } = useContext(MyContext);
  const navigate = useNavigate();
  const handleMain = () => {
    navigate("/");
  };
  const { togglePopup } = usePopup();

  return (
    <div className='navbar-div d-flex justify-content-center w-100'>
      <nav className="navbar">
        <h1 onClick={handleMain} className="brand" >Pulsar News</h1>
        <div>
          <ul className='navbar-ul'>
            <button onClick={() => handleCategoryPage('World', navigate)} className='navbar-items'>World</button>
            <button onClick={() => handleCategoryPage('Politics', navigate)} className='navbar-items '>Politics</button>
            <button onClick={() => handleCategoryPage('Books', navigate)} className='navbar-items '>Books</button>
            <button onClick={() => handleCategoryPage('Business', navigate)} className='navbar-items '>Business</button>
            <button onClick={() => handleCategoryPage('Technology', navigate)} className='navbar-items '>Technology</button>
            <button onClick={() => handleCategoryPage('Arts', navigate)} className='navbar-items '>Arts</button>
            <button onClick={() => handleCategoryPage('Fashion', navigate)} className='navbar-items '>Fashion</button>
            <button onClick={() => handleCategoryPage('Sports', navigate)} className='navbar-items '>Sports</button>
          </ul>
        </div>
        <div className="navbar-items-div d-flex align-items-center gap-2">
        <button onClick={(e)=>navigate("/SignIn")} className="btn btn-light border d-flex align-items-center">
            <RiAccountCircleLine  className='mr-2 text-xl'/>
            <p className="m-0 font-sans">Sign In</p>
          </button>
          <button onClick={togglePopup} className='p-2 rounded hover:bg-gray-200 transition border'>
            <IoSettingsSharp className='text-xl' />
          </button>
        
        

        </div>
      </nav>
    </div>

  )
} export default Navbar;
