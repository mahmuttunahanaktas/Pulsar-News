import React, { useContext } from 'react'
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import MyContext from '../../context';
import { usePopup } from '../../context';
import { IoIosCloseCircle } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { Fade } from '@mui/material';


export default function Settings() {
  const { isDarkMode, setIsDarkMode, changeHandleTheme } = useContext(MyContext);
  const { popupIsOppen, togglePopup } = usePopup();
  if (!popupIsOppen) return null;

  return (
    <Fade in={true} timeout={500}>

      <div className='popup-overlay'>
        <div className='popup-content'>
          <div className='w-full flex justify-end'>
            <IoIosCloseCircle onClick={togglePopup} className='cursor-pointer text-5xl hover:text-red-500' />
          </div>
          <div className='w-full bg-white shadow-2xl m-2 p-2 rounded-xl flex justify-center items-center gap-2 mb-4'>
            <IoSettingsSharp className='text-5xl' />
            <h1 className='roboto-normal'>Settings</h1>
          </div>
          <div className='bg-white flex flex-col w-full h-auto p-2 m-2 gap-2 rounded'>
            <div className='border-b-2 flex justify-between items-center'>
              <p className='roboto-normal text-3xl'> Theme</p>
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="checkbox"
                  checked={isDarkMode}
                  onClick={changeHandleTheme}
                />
                <label htmlFor="checkbox" className="checkbox-label">
                  <FaMoon className="fa-moon" />
                  <MdSunny className="fa-sun" />
                  <span className="ball"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}
