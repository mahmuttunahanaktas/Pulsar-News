import { findNonSerializableValue } from '@reduxjs/toolkit';
import React, { useContext, useEffect, useInsertionEffect, useState } from 'react'
import { NavItem } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import MyContext from '../../../context';
import LazyImage from '../../other/LazyImage';


function CategoryPage() {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { section } = useParams();
  const [requestCount, setRequestCount] = useState(0);


  const { KategoriSayfasindanGelenSection, setKategoriSayfasindanGelenSection } = useContext(MyContext);

  const API_URL = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=jragcoZD3twCzmu2uJV6ANvU8usEAyTx`;
  useEffect(() => {
    if (requestCount >= 5) return; // 5'ten fazla istek yapmayı engelle

    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("veri alınırken bir hata oluştu");
        }
        const data = await response.json();
        setNews(data.results)
        setRequestCount((prev) => prev + 1); // İstek sayısını artır

      }
      catch (err) {
        console.log("Hata Detayı ---- > ", err);
        setError(err.message);
      }
      finally {
        setLoading(false);
      }
    };
    fetchNews();

  }, [section, requestCount]);
  function yazdir(veri, theNew) {
    console.log("İŞTE LİNK --------------------> " + veri);
    setKategoriSayfasindanGelenSection(theNew.section.charAt(0).toUpperCase() + section.slice(1));
    console.log("SECTİON BİLGİSİ ****************** " + theNew.section);
    navigate(`/news/${encodeURIComponent(theNew.uri)}/nyt`);

  }

  if (loading) return <h1>Yükleniyor...</h1>
  if (error) return <p>HATA: {error}</p>

  return (
    <div className='container h-auto p-1' style={{ marginTop: '10%' }}>
      <div className='header-div w-100'>
        <h1 className='bla'>{section.charAt(0).toUpperCase() + section.slice(1)}</h1>
        <div style={{ width: '100%', height: '10px', borderTop: '2px solid black', borderBottom: '2px solid black' }}></div>
        <div className='catgeroy-news d-block'>
          {
            news.map((theNew, index) => (
              <div className='category-new' key={index} onClick={() => yazdir(theNew.uri, theNew)}>
                <p className='fs-6 text-secondary'>{theNew.published_date}</p>
                <div className='category-new-content'>
                  <h3 className='baslik'><strong>{theNew.title}</strong></h3>
                  <h5>{theNew.abstract}</h5>
                  <p className='fs-6 text-secondary'> - {theNew.byline}</p>
                </div>
                <LazyImage style={{ width: '33%' }} src={theNew.multimedia[0].url}>
                </LazyImage>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default CategoryPage;
