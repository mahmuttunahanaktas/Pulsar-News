import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MyContext from '../context';
import { CiLocationArrow1 } from "react-icons/ci";
import CategoriesBar from './CategoriesBar';


function MostPopularDetail() {
    const { uri, source } = useParams();
    const decodeUri=decodeURIComponent(uri,source);
    console.log("URI:", uri);
    console.log("Source:", source);
    const [actualNew, setActualNew] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const { handleGoToPageDetail } = useContext(MyContext);


    useEffect(() => {
        const MyApiKey = "jragcoZD3twCzmu2uJV6ANvU8usEAyTx";
        const apiUrl = source === 'nyt'
          ? `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${MyApiKey}`
          : `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${MyApiKey}`;
        console.log("İŞTE URL - > ", apiUrl);
        const fetchData = async () => {
          try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log("API'den dönen veri:", data);
            if (data.results) {
              const selectedNewItem = data.results.find(
                (item) => item.uri === decodeURIComponent(uri)
              );
              if (selectedNewItem) {
                setActualNew(selectedNewItem);
              } else {
                throw new Error("Seçilen haber bulunamadı.");
              }
            } else {
              throw new Error("Veri alınamadı");
            }
          } catch (error) {
            setError(true);
            console.error("Haber Yüklenirken bir sorun oluştu :/", error);
          } finally {
            setLoading(false); // Yükleme işlemi tamamlandı
          }
        };
        fetchData();
      }, [uri, source]);
    if (loading) {
        return <p>The New Is Loading...</p>;
    }
    if (error) {
        return <p>Haber yüklenirken bir hata oluştu. Lütfen tekrar deneyin.</p>;
    }
    if (!actualNew) {
        return <p>Veri bulunamadı.</p>;
    }

    return (
        <div className='container container-detail'>
            <div className='container-content w-100 mt-4' style={{ marginBottom: '50%' }}>
                <h1 className='fw-bold mt-5'>{actualNew.title}</h1>
                <p className='mini_news_category'>
                    /{actualNew.section.charAt(0).toUpperCase() + actualNew.section.slice(1)} /
                    {actualNew.subsection.charAt(0).toUpperCase() + actualNew.subsection.slice(1)}
                </p>
                {
                <img style={{ width: '100%' }}
                    src={actualNew.media[0]["media-metadata"]?.[2]?.url}
                    alt={actualNew.media[0]?.caption || actualNew.title}
                />}
                <p className='mini_news_category'>
                    / {actualNew.media[0]?.copyright ? actualNew.media[0]?.copyright : "The New York Times"}
                </p>
                <p className='detail-new-articles d-block fs-2 pt-5 pb-5' style={{ marginTop: '20%', borderTop: '2px solid black' }}>
                    <p>{actualNew.abstract}</p>
                    <br></br>
                    <p>{actualNew.media[0]?.caption}</p>
                    <p className='mini_news_category fs-5'>{actualNew.updated_date}</p>
                    <button onClick={(e) => handleGoToPageDetail(actualNew.url)} className='custom-button-1'>
                        Show To New Page <CiLocationArrow1 className='icon-custom' />
                    </button>
                </p>
            </div>
            <CategoriesBar className='w-40'></CategoriesBar>
        </div>
    );
} export default MostPopularDetail;
