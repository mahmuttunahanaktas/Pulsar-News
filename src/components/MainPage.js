import React, { useContext, useEffect, useState } from 'react'
import BreakingNews from './BreakingNews'
import MyContext from '../context';
import TopNews from './TopNews';
import MiniNews from './MiniNews';



function MainPage() {
  

  return (
    <div>
      <BreakingNews />
      <div className='container'>
        <section className='left-div'>
          <TopNews></TopNews>
        </section>
        <section className='right-div'>
              <MiniNews></MiniNews>
        </section>

       

      </div>




    </div>
  );
}
export default MainPage;
