import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainPageCategories() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [requestCount, setRequestCount] = useState(0);
    const API_KEY = "jragcoZD3twCzmu2uJV6ANvU8usEAyTx";
    const sections = [
        "world",
        "us",
        "business",
        "technology",
        "sports",
        "science",
        "arts",
        "opinion",
    ];
    
    useEffect(() => {
        if (requestCount >= 1) return; // 5'ten fazla istek yapmayı engelle

        const fetchCategories = async () => {
            try {
                const promises = sections.map(async (section) => {
                    const response = await fetch(
                        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`
                    );
                    if (!response.ok) {
                        throw new Error(`Error fetching ${section}: ${response.status}`);
                    }
                    const data = await response.json();
                    setRequestCount((prev) => prev + 1); // İstek sayısını artır

                    return {
                        section,
                        img: data.results[0]?.multimedia?.[1]?.url || "/placeholder.jpg",
                        headline: data.results[0]?.title || "Başlık Bulunamadı",
                        abstract: data.results[0]?.abstract || "Açıklama mevcut değil",
                        url: data.results[0]?.url || "#",
                    };
                });

                const results = await Promise.all(promises);
                setCategories(results);
            } catch (err) {
                console.error("Kategori alınırken hata oluştu: ", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, [requestCount]);

    if (loading) return <p>Yükleniyor...</p>;
    if (error) return <p>Veriler alınamadı. Lütfen tekrar deneyin.</p>;

    return (
        <div className='bg-gray-100 w-full h-auto p-5 m-5'>
            <div style={{ width: '100%', height: '10px', borderTop: '2px solid black', borderBottom: '2px solid black' }}></div>
            <div className="flex flex-wrap justify-center">
                {categories.map((category, index) => (
                    <div key={index} className='categories-item'>
                        <p><strong>{category.section.toUpperCase()}</strong></p>
                        <img
                            className='w-100 h-50'
                            src={category.img}
                            alt={`${category.section} Thumbnail`}
                        />
                        <h5
                            onClick={() => navigate(`/news/${encodeURIComponent(category.url)}/mostpopular`)}
                            className='item-headline'
                        >
                            <strong>{category.headline}</strong>
                        </h5>
                        <p
                            onClick={() => navigate(`/news/${encodeURIComponent(category.url)}/mostpopular`)}
                            className='item-abstract'
                        >
                            {category.abstract}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default MainPageCategories;
