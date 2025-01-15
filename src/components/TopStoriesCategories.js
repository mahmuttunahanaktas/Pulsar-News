import React,{useContext} from 'react'
import { Fade } from '@mui/material';
import MyContext from '../context';


export default function TopStoriesCategories() {
    const { selectedComponent, setSelectedComponent } = useContext(MyContext);

    return (
        <Fade in={true} timeout={500}>
            <div className='w-full h-full flex flex-col items-center'>
                <h1 className='shadow-xl rounded-xl border px-4 py-2 my-20'>All Categories</h1>
                <div className='w-full flex flex-wrap gap-4 justify-center'>
                    <p onClick={(e)=>setSelectedComponent('home')} className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Home</p>
                    <p onClick={(e)=>setSelectedComponent('home')} className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>World</p>
                    <p onClick={(e)=>setSelectedComponent('home')} className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Politics</p>
                    <p onClick={(e)=>setSelectedComponent('home')}  className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Books</p>
                    <p onClick={(e)=>setSelectedComponent('home')} className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Business</p>
                    <p onClick={(e)=>setSelectedComponent('home')} className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Technology</p>
                    <p onClick={(e)=>setSelectedComponent('home')} className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Arts</p>
                    <p onClick={(e)=>setSelectedComponent('home')} className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Fashion</p>
                    <p  onClick={(e)=>setSelectedComponent('home')} className='bla1 cursor-pointer text-xl hover:text-2xl transition-all bg-gray-100 border rounded p-3 shadow-xl'>Sports</p>
                </div>
            </div>
        </Fade >
    )
}
