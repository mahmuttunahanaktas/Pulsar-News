import React, { useEffect, useState } from 'react'
import { Fade } from '@mui/material';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import axios from 'axios';

function UserList() {
    const [users, setUsers] = useState([]);
    const handleDeleteUser = async (email) => {
        const isConfirmed = window.confirm("Are you sure you want to delete?");
        if (isConfirmed) {
            try {
                const response = await fetch(`http://localhost:3000/user/${email}`, {
                    method: "DELETE",

                });
                if (!response.ok) {
                    throw new Error("Kullanıcı silinirken hata oluştu!");
                }
                fetchUsers();
                return console.log("Kullanıcı Başarıyla Silinid!");
            } catch (error) {
                console.error(error);
            }
        }

    };
    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:3000/user");

            if (response.data && response.data.data && Array.isArray(response.data.data)) {
                setUsers(response.data.data);
            }else{}
        }
        catch (error) {
            console.error('Error: ', error);
            setUsers([]);
        }
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    const handleRefresh = async () => {
        fetchUsers();
    }


    return (
        <Fade in={true} timeout={500}>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center gap-2' style={{ marginTop: '5%' }}>
                    <h1 className='m-0 p-0'>User List</h1>
                </div>
                <div>
                    <p className='font-sans text-center'>You can manage users from here.</p>
                    <div className='w-full h-full rounded flex flex-col items-center p-4'>
                        <div className='rounded-2xl border-1 border-black h-auto w-full m-3 p-3'>
                            <div className='w-full my-4 p-1' style={{ borderBottom: '1px solid gray' }}>
                                <button onClick={(e) => handleRefresh()}
                                    className="btn btn-light border d-flex align-items-center ml-5 mb-2">
                                    <TbRefresh className='text-xl' />
                                    <p className="m-0 font-sans text-lg">Refresh</p>
                                </button>
                            </div>
                            <ul className='max-h-80 overflow-y-scroll'>
                                {
                                    users.map((user) => (
                                        <div key={user.id} className='border-1 my-2 p-2 rounded-xl border-gray-400 gap-2 flex items-center justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <FaUser className='text-xl' />
                                                <div>
                                                    <p className='font-sans font-lg m-0 p-0'>{user.name}</p>
                                                    <p className='font-sans font-xs m-0 p-0'> -  {user.email}</p>
                                                </div>
                                            </div>
                                            <button onClick={(e) => handleDeleteUser(user.email)}
                                                className="btn btn-light border d-flex align-items-center gap-2"
                                                style={{ background: 'red' }}>
                                                <MdOutlineDeleteOutline className='text-xl text-white' />
                                                <p className="m-0 font-sans text-white text-lg">Delete</p>
                                            </button>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
} export default UserList;
