import React, { useContext, useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdAdminPanelSettings } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { TbCategoryPlus } from "react-icons/tb";
import { TbNews } from "react-icons/tb";
import { TbNewsOff } from "react-icons/tb";
import { RiAccountCircleLine } from "react-icons/ri";
import MyContext from '../../../context';
import { LuSearch } from "react-icons/lu";

function AdminPanelBar() {
    const [islogin, setIslogin] = useState(false);
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('jwt');
        setIslogin(false);
        navigate("/SignIn")
    };
    const token = localStorage.getItem('jwt')

    useEffect(() => {
        setIslogin(!!token);
    }, [token]);
    const { setSelectedComponent } = useContext(MyContext);
    return (
        <div className='bg-white text-center m-9 mt-28 rounded-xl flex flex-col shadow-xl' style={{ width: '15%' }}>
            <div className='border-b border-gray-300 flex justify-center items-center gap-2 m-3'>
                <MdAdminPanelSettings className='text-5xl' />
                <p className='font-sans font-bold text-xl m-0 p-0'>Admin Settings</p>
            </div>

            <button onClick={(e) => setSelectedComponent("AccountSettings")} className='rounded-xl hover:bg-gray-100 flex items-center gap-2 mx-4 my-1 py-3 px-1'>
                <RiAdminLine className='text-3xl' />
                <p className='font-sans  text-lg m-0 p-0'>Admin Operations</p>
            </button>

            <button onClick={(e) => setSelectedComponent("EditNews")} className='rounded-xl hover:bg-gray-100 flex items-center gap-2 mx-4 my-1 py-3 px-1'>
                <TbNews className='text-3xl' />
                <p className='font-sans  text-lg m-0 p-0'>Edit News</p>
            </button>
            <button onClick={(e) => setSelectedComponent("EditCategories")} className='rounded-xl hover:bg-gray-100 flex items-center gap-2 mx-4 my-1 py-3 px-1'>
                <TbCategoryPlus className='text-3xl' />
                <p className='font-sans  text-lg m-0 p-0'>Edit Categories</p>
            </button>
            <button onClick={(e) => setSelectedComponent("userlist")} className='rounded-xl hover:bg-gray-100 flex items-center gap-2 mx-4 my-1 py-3 px-1'>
                <RiAccountCircleLine className='text-3xl' />
                <p className='font-sans  text-lg m-0 p-0'>User List</p>
            </button>

            <div className='bg-gray-200 h-px m-3'></div>

            <button onClick={(e) => logOut()} className='rounded-xl hover:bg-gray-100 flex items-center gap-2 mx-4 my-1 py-3 px-1'>
                <RiAdminLine className='text-3xl' />
                <p className='font-sans  text-lg m-0 p-0'>Log out</p>
            </button>
        </div>
    )
} export default AdminPanelBar;
