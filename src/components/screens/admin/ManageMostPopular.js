import React from 'react'
import { Fade } from '@mui/material';
import { BsSearch } from "react-icons/bs";
import LazyImage from '../../other/LazyImage';
import { MdRestartAlt } from "react-icons/md";

export default function ManageMostPopular() {
    return (
        <Fade in={true} timeout={500}>
            <div className=' w-full flex flex-wrap gap-4 justify-center overflow-y-scroll max-h-full list-none'>
                <div className='m-4 w-full flex items-center justify-between'>
                    <h2 className='bla1'>Most Popular API's News</h2>


                    <div className='flex p-0 gap-2 items-center '>
                        <button className="btn btn-light border d-flex align-items-center">
                            <MdRestartAlt className='mr-2 text-xl' />
                            <p className="m-0 font-sans">Refresh</p>
                        </button>
                        <BsSearch className='text-2xl cursor-pointer' />
                        <input type='text' className='font-sans p-2 text-md rounded border-1 border-gray-600'></input>
                    </div>
                </div>
                <div style={{ width: '100%', height: '10px', borderTop: '2px solid black', borderBottom: '2px solid black' }}></div>


                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
                <div className='bla1 cursor-pointer bg-gray-100 border rounded p-3 shadow-xl gap-2 flex'>
                    <div className='leftdiv'>
                        <p className='font-bold text-xl'>The New Title</p>
                        <p className='font-bold text-lg text-gray-400'>The New Date</p>

                    </div>
                    <LazyImage className=' h-auto w-24' src='/images/newspaper.webp'></LazyImage>
                </div>
            </div>
        </Fade>
    )
}
