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
    <nav className="navbar navbar-dark bg-dark text-white p-2">
      <h1 onClick={handleMain} className="navbar-brand">Pulsar News</h1>
      <div className="d-flex align-items-center">
        <button onClick={handlePanel} className="btn btn-light d-flex align-items-center me-2" style={{ visibility: adminButtonVisiblty }}>
          <MdAdminPanelSettings style={{ height: '1rem' }} />
          <p className="m-0">Yönetici Paneli</p>
        </button>
        <button onClick={handleAdmin} className="btn btn-light d-flex align-items-center">
          <GrUserAdmin style={{ height: '1rem' }} />
          <p className="m-0"> {isAdminLogged ? "Çıkış Yap" : "Yönetici Girişi"}</p>
        </button>
  
      </div>
    </nav>

  )
} export default Navbar;
