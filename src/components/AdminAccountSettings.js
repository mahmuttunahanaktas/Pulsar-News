import React from 'react';
import { Fade } from '@mui/material';
import { RiAdminLine } from "react-icons/ri";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaRegSave } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";

function AdminAccountSettings() {
  return (
    <Fade in={true} timeout={500}>
      <div className='w-full h-full flex flex-col items-center overflow-y-scroll p-3'>
        {/* Header */}
        <div className='flex justify-center items-center gap-2' style={{ marginTop: '5%' }}>
          <RiAdminLine className='text-6xl border-1 border-black rounded-full p-1' />
          <h1 className='m-0 p-0'>Welcome Admin Name</h1>
        </div>


        <div className='w-3/4 mt-10'>


          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography><h3>Account Details</h3></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className='font-sans'>You can manage your account informations.</p>
                <div className='bg-gray-50 w-full h-full rounded flex flex-col items-center p-4'>
                  <div className='w-64 flex flex-col gap-2 m-3'>
                    <span className='text-xl font-sans'>Full Name</span>
                    <input type='text' className='font-sans p-2 text-md rounded border-1 border-gray-600'></input>
                  </div>
                  <div className='w-64 flex flex-col gap-2 m-3'>
                    <span className='text-xl font-sans'>Email Adress</span>
                    <input type='email' className='font-sans p-2 text-md rounded border-1 border-gray-600'></input>
                  </div>
                  <div className='w-64 flex flex-col gap-2 m-3'>
                    <span className='text-xl font-sans'>Password</span>
                    <input type='password' className='font-sans p-2 text-md rounded border-1 border-gray-600'></input>
                  </div>
                  <div className='m-3 w-full'>
                    <button className="btn btn-light border d-flex align-items-center float-right gap-2 mx-1 " style={{ background: '#102c54' }}>
                      <FaRegSave className='text-xl text-white' />
                      <p className="m-0 font-sans text-white text-lg">Save Changes</p>
                    </button>
                  </div>


                </div>

              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography><h3>Admin List</h3></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className='font-sans'>You can manage other admins from here.</p>
                <div className='w-full h-full rounded flex flex-col items-center p-4'>
                  <div className='rounded-2xl border-1 border-black h-auto w-full m-3 p-3'>
                    <div className='h-auto w-full my-4 p-1' style={{ borderBottom: '1px solid gray' }}></div>
                    <ul className='max-h-60 overflow-y-scroll'>


                      <div className='border-1 my-2 p-2 rounded-xl border-gray-400 gap-2 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <FaUserShield className='text-xl' />
                          <p className='font-sans m-0 p-0'>Admin Name</p>
                        </div>
                        <button
                          className="btn btn-light border d-flex align-items-center gap-2"
                          style={{ background: 'red' }}
                        >
                          <MdOutlineDeleteOutline className='text-xl text-white' />
                          <p className="m-0 font-sans text-white text-lg">Delete</p>
                        </button>
                      </div>
                      <div className='border-1 my-2 p-2 rounded-xl border-gray-400 gap-2 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <FaUserShield className='text-xl' />
                          <p className='font-sans m-0 p-0'>Admin Name</p>
                        </div>
                        <button
                          className="btn btn-light border d-flex align-items-center gap-2"
                          style={{ background: 'red' }}
                        >
                          <MdOutlineDeleteOutline className='text-xl text-white' />
                          <p className="m-0 font-sans text-white text-lg">Delete</p>
                        </button>
                      </div>

                      <div className='border-1 my-2 p-2 rounded-xl border-gray-400 gap-2 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <FaUserShield className='text-xl' />
                          <p className='font-sans m-0 p-0'>Admin Name</p>
                        </div>
                        <button
                          className="btn btn-light border d-flex align-items-center gap-2"
                          style={{ background: 'red' }}
                        >
                          <MdOutlineDeleteOutline className='text-xl text-white' />
                          <p className="m-0 font-sans text-white text-lg">Delete</p>
                        </button>
                      </div>
                      <div className='border-1 my-2 p-2 rounded-xl border-gray-400 gap-2 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <FaUserShield className='text-xl' />
                          <p className='font-sans m-0 p-0'>Admin Name</p>
                        </div>
                        <button
                          className="btn btn-light border d-flex align-items-center gap-2"
                          style={{ background: 'red' }}
                        >
                          <MdOutlineDeleteOutline className='text-xl text-white' />
                          <p className="m-0 font-sans text-white text-lg">Delete</p>
                        </button>
                      </div><div className='border-1 my-2 p-2 rounded-xl border-gray-400 gap-2 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <FaUserShield className='text-xl' />
                          <p className='font-sans m-0 p-0'>Admin Name</p>
                        </div>
                        <button
                          className="btn btn-light border d-flex align-items-center gap-2"
                          style={{ background: 'red' }}
                        >
                          <MdOutlineDeleteOutline className='text-xl text-white' />
                          <p className="m-0 font-sans text-white text-lg">Delete</p>
                        </button>
                      </div><div className='border-1 my-2 p-2 rounded-xl border-gray-400 gap-2 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <FaUserShield className='text-xl' />
                          <p className='font-sans m-0 p-0'>Admin Name</p>
                        </div>
                        <button
                          className="btn btn-light border d-flex align-items-center gap-2"
                          style={{ background: 'red' }}
                        >
                          <MdOutlineDeleteOutline className='text-xl text-white' />
                          <p className="m-0 font-sans text-white text-lg">Delete</p>
                        </button>
                      </div><div className='border-1 my-2 p-2 rounded-xl border-gray-400 gap-2 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <FaUserShield className='text-xl' />
                          <p className='font-sans m-0 p-0'>Admin Name</p>
                        </div>
                        <button
                          className="btn btn-light border d-flex align-items-center gap-2"
                          style={{ background: 'red' }}
                        >
                          <MdOutlineDeleteOutline className='text-xl text-white' />
                          <p className="m-0 font-sans text-white text-lg">Delete</p>
                        </button>
                      </div><div className='border-1 my-2 p-2 rounded-xl border-gray-400 gap-2 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <FaUserShield className='text-xl' />
                          <p className='font-sans m-0 p-0'>Admin Name</p>
                        </div>
                        <button
                          className="btn btn-light border d-flex align-items-center gap-2"
                          style={{ background: 'red' }}
                        >
                          <MdOutlineDeleteOutline className='text-xl text-white' />
                          <p className="m-0 font-sans text-white text-lg">Delete</p>
                        </button>
                      </div><div className='border-1 my-2 p-2 rounded-xl border-gray-400 gap-2 flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <FaUserShield className='text-xl' />
                          <p className='font-sans m-0 p-0'>Admin Name</p>
                        </div>
                        <button
                          className="btn btn-light border d-flex align-items-center gap-2"
                          style={{ background: 'red' }}
                        >
                          <MdOutlineDeleteOutline className='text-xl text-white' />
                          <p className="m-0 font-sans text-white text-lg">Delete</p>
                        </button>
                      </div>
                    </ul>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography><h3>Add New Admin</h3></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className='font-sans'>You can create a new admin account</p>
                <div className='bg-gray-50 w-full h-full rounded flex flex-col items-center p-4'>
                  <div className='w-64 flex flex-col gap-2 m-3'>
                    <span className='text-xl font-sans'>Admin Full Name*</span>
                    <input type='text' className='font-sans p-2 text-md rounded border-1 border-gray-600'></input>
                  </div>
                  <div className='w-64 flex flex-col gap-2 m-3'>
                    <span className='text-xl font-sans'>Email Adress*</span>
                    <input type='email' className='font-sans p-2 text-md rounded border-1 border-gray-600'></input>
                  </div>
                  <div className='w-64 flex flex-col gap-2 m-3'>
                    <span className='text-xl font-sans'>Password</span>
                    <input type='password' className='font-sans p-2 text-md rounded border-1 border-gray-600'></input>
                  </div>
                    <button className="btn btn-light border d-flex align-items-center float-right gap-2 "  style={{ background: '#102c54' ,margin:'30px'}}>
                      <IoPersonAddOutline className='text-xl text-white' />
                      <p className="m-0 font-sans text-white text-lg">Add Admin</p>
                    </button>


                </div>

              </Typography>
            </AccordionDetails>
          </Accordion>

          <p className='font-sans text-md m-4 text-gray-500'> - Don't forget! finally you should click to "Save Changes" button.</p>


        </div>
      </div>
    </Fade>
  );
} export default AdminAccountSettings;
