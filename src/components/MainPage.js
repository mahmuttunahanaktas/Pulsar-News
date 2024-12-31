import React, { useContext, useEffect, useState } from 'react'
import BreakingNews from './BreakingNews'
import MyContext from '../context';
import TopNews from './TopNews';
import MiniNews from './MiniNews';
import MainPageCategories from './MainPageCategories';
import LastVideos from './LastVideos';


function MainPage() {


  return (
    <div>
      <BreakingNews />
      <div className='container container-main border-bottom' style={{ marginTop: '5%' }}>
        <section className='left-div'>
          <TopNews></TopNews>
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
    </div>
  );
}
export default MainPage;
