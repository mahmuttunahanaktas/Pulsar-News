import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LazyImage from '../../other/LazyImage';
import { CircularProgress } from '@mui/material';
import axios from 'axios';

function TopNews() {
  const navigate = useNavigate(); // useNavigate hook'u ile yönlendirme işlevi
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);// loading durumu için.
  const [error, setError] = useState(null);// api'da hata olursa göstertmek için.
  const [requestCount, setRequestCount] = useState(0);
  const API_URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=jragcoZD3twCzmu2uJV6ANvU8usEAyTx`;

  //Haberleri API ile çekiyoruz.
  useEffect(() => {
    if (requestCount >= 1) return; // 5'ten fazla istek yapmayı engelle
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL);
        setNews(response.data.results);
        setRequestCount((prev) => prev + 1); // İstek sayısını artır
      } catch (err) {
        console.error("Hata Detayı:", err);
        setError(err.message);
        setNews([]);
      }
      finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [requestCount]);

  if (loading) return <div className='w-full h-screen flex justify-center items-center'><CircularProgress color="secondary" /></div>
  if (error) return <p>HATA: {error}</p>
  return (
    <ul>
      {
        news && news.length > 0 ? (
          news.map((item, index) => (
            <div
              onClick={() => navigate(`/news/${encodeURIComponent(item.uri)}/nyt`)}
              className="topNewDiv" key={index}>
              <div className="text-areas-div">
                <p className='top_new_title'>{item.title}</p>
                <p>{item.abstract}</p>
              </div>
              <LazyImage className='top_news_image' src={item.multimedia[0].url} alt={item.title} />
            </div>
          ))
        ) : (
          <p>API HATA VERDİ.</p>
        )}
    </ul>
  )
}
export default TopNews
