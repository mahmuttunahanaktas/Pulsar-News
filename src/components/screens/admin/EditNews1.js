import React,{useState,useContext} from 'react'
import { Fade } from '@mui/material';
import MyContext from '../../../context';



function EditNews1() {
    const {selectedComponent,setSelectedComponent}=useContext(MyContext);
    return (
        <Fade in={true} timeout={500}>
            <div className='overflow-y-scroll w-full h-full flex justify-center items-center'>
                <div onClick={(e)=>setSelectedComponent("top")} className='border m-3 cursor-pointer rounded-2xl flex flex-col items-center transition-all hover:w-1/2 w-1/3 h-auto bg-gray-100 gap-1 shadow-2xl'>
                    <img className='w-full h-auto rounded-2xl' src='/images/topstoriesbanner.JPG' alt='/images/error_img.png'></img>
                    <h2>Top Stories API's News</h2>
                </div>

                <div onClick={(e)=>setSelectedComponent("most")}  className='border m-3 cursor-pointer rounded-2xl flex flex-col items-center transition-all hover:w-1/2 w-1/3 h-auto bg-gray-100 gap-1 shadow-2xl'>
                    <img className='w-full h-auto rounded-2xl' src='/images/mostpopularbanner.JPG'></img>
                    <h2>Most Popular API's News</h2>
                </div>

            </div>
        </Fade>
    )
} export default EditNews1;
