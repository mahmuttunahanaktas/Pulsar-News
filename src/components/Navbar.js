import React, { useContext, useState } from 'react'
import { MdAdminPanelSettings } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { Navigate, useNavigate } from 'react-router-dom';
import MyContext from '../context';
import { toast, ToastContainer } from 'react-toastify';
import { IoSettingsSharp } from "react-icons/io5";
import 'react-toastify/dist/ReactToastify.css';
import { usePopup } from '../context';

function Navbar() {
  const { adminButtonVisiblty, isAdminLogged, setIsAdminLogged } = useContext(MyContext);
  const navigate = useNavigate(); // useNavigate hook'u ile yönlendirme işlevi
  const handleAdmin = () => {
    if (isAdminLogged) {
      setIsAdminLogged(false);

    }
    else {
      navigate("/login");
    }

  };
  const handleMain = () => {
    navigate("/");

  };
  const handlePanel = () => {
    navigate("/adminpanel");

  };
  const handleCategoryPage = (category) => {
    navigate(`/category/${category.toLowerCase()}`);
  };

  const { togglePopup } = usePopup();

  return (
    <div className='navbar-div d-flex justify-content-center w-100'>
      <nav className="navbar">
        <h1 onClick={handleMain} className="brand" >Pulsar News</h1>
        <div>
          <ul className='navbar-ul'>
            <button onClick={() => handleCategoryPage('World')} className='navbar-items '>World</button>
            <button onClick={() => handleCategoryPage('Politics')} className='navbar-items '>Politics</button>
            <button onClick={() => handleCategoryPage('Science')} className='navbar-items '>Science</button>
            <button onClick={() => handleCategoryPage('Technology')} className='navbar-items '>Technology</button>
            <button onClick={() => handleCategoryPage('Arts')} className='navbar-items '>Arts</button>
            <button onClick={() => handleCategoryPage('Travel')} className='navbar-items '>Travel</button>
            <button onClick={() => handleCategoryPage('Fashion')} className='navbar-items '>Fashion</button>
            <button onClick={() => handleCategoryPage('Health')} className='navbar-items '>Health</button>
          </ul>
        </div>
        <div className="navbar-items-div d-flex align-items-center gap-2">
          <button onClick={togglePopup} className='p-2 rounded hover:bg-gray-200 transition border'>
            <IoSettingsSharp className='text-xl' />
          </button>
          <button onClick={handlePanel} className="btn btn-light border d-flex align-items-center" style={{ visibility: adminButtonVisiblty }}>
            <MdAdminPanelSettings style={{ height: '1rem' }} />
            <p className="m-0">Admin Panel</p>
          </button>
          <button onClick={handleAdmin} className="btn btn-light border d-flex align-items-center">
            <GrUserAdmin style={{ height: '1rem' }} />
            <p className="m-0"> {isAdminLogged ? "Log out" : "Admin Login"}</p>
          </button>

        </div>
      </nav>
    </div>

  )
} export default Navbar;
