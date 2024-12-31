import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function CategoriesBar() {
    return (
        <section className='categories-section'>
            <div style={{ width: '100%', height: '10px', borderTop: '2px solid black', borderBottom: '2px solid black' }}></div>
            <div className='category-item'>
                <p>World</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item'>
                <p>Politics</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item'>
                <p>Science</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item'>
                <p>Technology</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item'>
                <p>Arts</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item'>
                <p>Travel</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item'>
                <p>Fashion</p>
                <IoIosArrowForward />
            </div>
            <div className='category-item'>
                <p>Health</p>
                <IoIosArrowForward />
            </div>

            <div style={{ width: '100%', height: '10px', borderTop: '2px solid black', borderBottom: '2px solid black' }}></div>

        </section>
    )
} export default CategoriesBar;
