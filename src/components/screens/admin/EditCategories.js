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
import { TbCategoryPlus } from "react-icons/tb";


export default function EditCategories() {
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
              <Typography><h3>Top Stories Categories</h3></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              <div className='w-full flex flex-wrap gap-4 justify-center'>
                    <p  className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Home</p>
                    <p  className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>World</p>
                    <p  className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Politics</p>
                    <p   className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Books</p>
                    <p  className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Business</p>
                    <p  className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Technology</p>
                    <p  className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Arts</p>
                    <p  className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Fashion</p>
                    <p   className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Sports</p>
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
              <Typography><h3>Most Popular Categories</h3></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              <div className='w-full flex flex-wrap gap-4 justify-center'>
                    <p  className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Emailed</p>
                    <p  className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Shared</p>
                    <p  className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Viewed</p>

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
              <Typography><h3>Add New Category</h3></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                 <Typography>
                <p className='font-sans'>You can manage the categories of Top Stories API.</p>
                <div className='bg-gray-50 w-full h-full rounded flex flex-col items-center p-4'>
                  <div className='w-64 flex flex-col gap-2 m-3'>
                    <span className='text-xl font-sans'>Category Name*</span>
                    <input type='text' className='font-sans p-2 text-md rounded border-1 border-gray-600'></input>
                  </div>
                  <div className='w-64 flex flex-col gap-2 m-3'>
                    <span className='text-xl font-sans'>Section*</span>
                    <input type='email' placeholder='Top Stories' className='font-sans p-2 text-md rounded border-1 border-gray-600'></input>
                  </div>
                 
                  <div className='m-3 w-full'>
                    <button className="btn btn-light border d-flex align-items-center float-right gap-2 mx-1 " style={{ background: '#102c54' }}>
                      <TbCategoryPlus className='text-xl text-white' />
                      <p className="m-0 font-sans text-white text-lg">Add Category</p>
                    </button>
                  </div>


                </div>

              </Typography>

              </Typography>
            </AccordionDetails>
          </Accordion>


          <p className='font-sans text-md m-4 text-gray-500'> - Don't forget! finally you should click to "Save Changes" button.</p>


        </div>
      </div>
    </Fade>

  )
}
