import React, { useContext } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import {Navigate,useNavigate} from  "react-router-dom";
import MyContext from '../context';

function CategoriesBar() {
    const {handleCategoryPage}=useContext(MyContext);
    const navigate=useNavigate();
    return (
        <section className='categories-section'>
            <div style={{ width: '100%', height: '10px', borderTop: '2px solid black', borderBottom: '2px solid black' }}></div>
           
            <div className='category-item' onClick={() => handleCategoryPage('World',navigate)}>
                <p>World</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item' onClick={() => handleCategoryPage('Politics',navigate)}>
                <p>Politics</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item' onClick={() => handleCategoryPage('Science',navigate)}>
                <p>Science</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item' onClick={() => handleCategoryPage('Technology',navigate)}>
                <p>Technology</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item' onClick={() => handleCategoryPage('Arts',navigate)}>
                <p>Arts</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item' onClick={() => handleCategoryPage('Travel',navigate)}>
                <p>Travel</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item' onClick={() => handleCategoryPage('Fashion',navigate)}>
                <p>Fashion</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item' onClick={() => handleCategoryPage('Health',navigate)}>
                <p>Health</p>
                <IoIosArrowForward />
            </div>

            <div style={{ width: '100%', height: '10px', borderTop: '2px solid black', borderBottom: '2px solid black' }}></div>

        </section>
    )
} export default CategoriesBar;
