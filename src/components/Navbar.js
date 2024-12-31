import React, { useContext, useState } from 'react'
import { MdAdminPanelSettings } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { Navigate, useNavigate } from 'react-router-dom';
import MyContext from '../context';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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



  return (
    <div className='navbar-div d-flex justify-content-center w-100'>


      <nav className="navbar border-bottom p-2 w-75">
        <h1 onClick={handleMain} className="navbar-brand fs-1" style={{fontWeight:'800',cursor:'pointer'}}>Pulsar News</h1>

        <div>
          <ul className='d-flex m-1 p-1'>
            <button className='navbar-items '>World</button>
            <button className='navbar-items '>Politics</button>
            <button className='navbar-items '>Science</button>
            <button className='navbar-items '>Technology</button>
            <button className='navbar-items '>Arts</button>
            <button className='navbar-items '>Travel</button>
            <button className='navbar-items '>Fashion</button>
            <button className='navbar-items '>Health</button>
          </ul>

        </div>
        <div className="d-flex align-items-center">
          <button onClick={handlePanel} className="btn btn-light border d-flex align-items-center me-2" style={{ visibility: adminButtonVisiblty }}>
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
