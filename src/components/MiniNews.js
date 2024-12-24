import React, { useState, useEffect } from 'react'

export default function MiniNews() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);// loading durumu için.
    const [error, setError] = useState(null);// api'da hata olursa göstertmek için.
    const API_URL = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=jragcoZD3twCzmu2uJV6ANvU8usEAyTx`;
    //Haberleri API ile çekiyoruz

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                console.log(data.results); // API'dan dönen veriyi incelemek için
                setNews(data.results);
            } catch (err) {
                console.error("Hata Detayı:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, []);

    if (loading) return <h1>Yükleniyor...</h1>
    if (error) return <p>HATA: {error}</p>
    return (
        <div className='justify-contet-center'>
            <h2 style={{borderBottom:'2px solid black',textAlign:'center',fontWeight:'bold',fontStyle:'italic'}}>Most Popular</h2>
            <ul>
                {
                    news.map((item, index) => (

                        <div className="mini-news-div" key={index}>
                            <div className="mini-text-areas-div">
                                <p className='mini_news_title'>{item.title}</p>
                                <p className='mini_news_category'>{item.section}</p>
                            </div>
                            {item.media && item.media[0] && item.media[0]["media-metadata"] && (
                                <img className='mini_news_image'
                                    src={item.media[0]["media-metadata"][2].url}
                                    alt={item.title}

                                />
                            )}


                        </div>
                    ))
                }

            </ul>

        </div>
    )
}
