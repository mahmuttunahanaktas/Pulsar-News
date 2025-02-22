import React, { useContext } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import {Navigate,useNavigate} from  "react-router-dom";
import MyContext from '../../../context';

function CategoriesBar() {
    const {handleCategoryPage}=useContext(MyContext);
    const navigate=useNavigate();
    return (
        <section className='w-auto' >
            <div style={{ width: '100%', height: '10px', borderTop: '2px solid black', borderBottom: '2px solid black' }}></div>
    
            <div className='category-item' onClick={() => handleCategoryPage('World',navigate)}>
                <p>World</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item' onClick={() => handleCategoryPage('Politics',navigate)}>
                <p>Politics</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item' onClick={() => handleCategoryPage('Books',navigate)}>
                <p>Books</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item' onClick={() => handleCategoryPage('Business',navigate)}>
                <p>Business</p>
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
          
            <div className='category-item' onClick={() => handleCategoryPage('Fashion',navigate)}>
                <p>Fashion</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item' onClick={() => handleCategoryPage('Sports',navigate)}>
                <p>Sports</p>
                <IoIosArrowForward />
            </div>

            <div style={{ width: '100%', height: '10px', borderTop: '2px solid black', borderBottom: '2px solid black' }}></div>

        </section>
    )
} export default CategoriesBar;
