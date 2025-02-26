import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../../context';
import TopNews from './News/TopNews';
import MiniNews from './News/MiniNews';
import MainPageCategories from './News/MainPageCategories';
import LastVideos from '../other/LastVideos';
import Footer from '../other/Footer';


function MainPage() {
  return (
    <div>
      <div className='container container-main border-bottom' style={{ marginTop: '5%' }}>
        <section className='left-div'>

          <TopNews />

        </section>
        <section className='right-div'>

          <MiniNews></MiniNews>


        </section>
      </div>
      <section className='categories-mainpage-div w-100 d-flex justify-content-center mt-5'>


        <MainPageCategories></MainPageCategories>



      </section>
      <section className='latest-videos-section w-100 d-flex justify-content-center mt-5' style={{ background: 'black', color: 'white' }}>

        <LastVideos></LastVideos>


      </section>
      <section className='latest-videos-section w-100 d-flex justify-content-center' style={{ background: 'black', color: 'white' }}>

        <Footer />


      </section>
    </div>
  );
}
export default MainPage;
