import React, { useActionState, useEffect, useState } from 'react'
import { NavItem } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

function MainPageCategories() {
    const navigate = useNavigate();
    //api'dan gelen veriler data arrayinde birikecek
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //Api Key'im
    const API_KEY = "jragcoZD3twCzmu2uJV6ANvU8usEAyTx";

    //Bölümler
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

        const fetchCategories = async () => {
            try {
                const promises = sections.map(async (section) => {
                    const response = await fetch(
                        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`
                    );
                    if (!response.ok) {
                        throw new Error(`Error fetching ${section}:${response.status}`);
                    }
                    const data = await response.json();

                    //İlk Haberi al.
                    return {
                        section,
                        img: data.results[0]?.multimedia?.[1].url || "",
                        headline: data.results[0]?.title || "No Headline available",
                        abstract: data.results[0]?.abstract || "",
                        url: data.results[0]?.url || "#",

                    };
                });

                //tüm bölümlerin gelen ilk haberini al
                const results = await Promise.all(promises);

                //state'yi güncelle

                setCategories(results);

            } catch (err) {
                console.error("error fetching categories: ", err)
                setError(true);

            } finally {
                setLoading(false);

            }
        };
        fetchCategories();
    }, [API_KEY, sections]);


    return (
        <div style={{ width: '60%' }}>
            <div style={{ width: '100%', height: '10px', borderTop: '2px solid black', borderBottom: '2px solid black' }}></div>
            <div className="main-page-categories">
                {
                    categories.map((category, index) => (
                        <div key={index} className='categories-item'>
                            <p><strong> {category.section.toUpperCase()}</strong></p>
                            <img className='w-100 h-50' src={category.img}
                                alt={`${category.section} Thumbnail`}></img>
                            <h5 onClick={() => navigate(`/news/${encodeURIComponent(category.uri)}/nyt`)} className='item-headline'><strong>{category.headline}</strong></h5>

                            <p onClick={() => navigate(`/news/${encodeURIComponent(category.uri)}/nyt`)} className='item-abstract'>{category.abstract}</p>



                        </div>

                    ))
                }

            </div>


        </div>

    )
} export default MainPageCategories;
