import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MyContext from '../context';
import { CiLocationArrow1 } from "react-icons/ci";
import CategoriesBar from './CategoriesBar';


function MostPopularDetail() {

    const { uri, source } = useParams();
    const [actualNew, setActualNew] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const { handleGoToPageDetail } = useContext(MyContext);


    useEffect(() => {
        const MyApiKey = "jragcoZD3twCzmu2uJV6ANvU8usEAyTx";
        const apiUrl = source === 'nyt'
            ? `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${MyApiKey}`
            : `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${MyApiKey}`;


        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // API'den gelen veriyi kontrol et
                if (data.results) {
                    const selectedNewItem = data.results.find(
                        (item) => item.uri === decodeURIComponent(uri)
                    );
                    setActualNew(selectedNewItem);
                } else {
                    throw new Error('Veri alınamadı');
                }
            })
            .catch((error) => {
                setError(true);
                console.error("Haber Yüklenirken bir sorun oluştu :/", error);
            })
            .finally(() => {
                setLoading(false); // Yükleme işlemi tamamlandı
            });

    }, [uri, source])

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
            <div className='container-content w-60' style={{ marginBottom: '50%' }}>
                <h1 className='fs-1 fw-bold'>{actualNew.title}</h1>
                <p className='mini_news_category'>
                    /{actualNew.section.charAt(0).toUpperCase() + actualNew.section.slice(1)} /
                    {actualNew.subsection.charAt(0).toUpperCase() + actualNew.subsection.slice(1)}
                </p>
                <img style={{ width: '100%' }}
                    src={actualNew.multimedia[0]?.url}
                    alt={actualNew.multimedia[0]?.caption || actualNew.title}
                />
                <p className='mini_news_category'>
                    / {actualNew.multimedia[0]?.copyright ? actualNew.multimedia[0]?.copyright : "The New York Times"}
                </p>

                <p className='detail-new-articles d-block fs-2 pt-5 pb-5' style={{ marginTop: '20%', borderTop: '2px solid black' }}>
                    <p>{actualNew.abstract}</p>
                    <br></br>

                    <p>{actualNew.multimedia[0]?.caption}</p>

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
