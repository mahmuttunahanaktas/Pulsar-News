import React, { useContext } from 'react'
import MyContext from '../context';
import { FaRegDotCircle } from "react-icons/fa";
import '../BreakingNews.css';
function BreakingNews() {
  const { breakingNew } = useContext(MyContext);
  return (
    <nav className="breaking-news-banner">
      <h1 className="breaking-news-text">
        <FaRegDotCircle className="icon" />
        {breakingNew}
      </h1>
    
    </nav>
  )
}
export default BreakingNews;
