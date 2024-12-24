import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
function NewDetail() {
  const { uri } = useParams(); //URL'den uri parametresini aldık.
  const [actualNew, setActualNew] = useState(null);

  useEffect(() => {
    fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=jragcoZD3twCzmu2uJV6ANvU8usEAyTx")
      .then((response) => response.json())
      .then((data) => {
        const selectedNew = data.results.find(
          (item) => item.uri === decodeURIComponent(uri)
        );
        setActualNew(selectedNew);
      })
      .catch((error) => console.error("Haber yüklenirken bir sorun oluştu :/", error));    
  }, [uri]);
  if (!actualNew) {
    return <p>actualNew yükleniyor....</p>;
  }
  else {

    return (
      <div className='container justify-content-center bg-primary'>
        <div className='container-content'>
          <h1 className='fs-1 fw-bold'>{actualNew.title}</h1>
          <p className='mini_news_category'>{actualNew.section.charAt(0).toUpperCase()+actualNew.section.slice(1)}</p>
          <p>{actualNew.abstract}</p>
          <img style={{ height: '40vh' }}
            src={actualNew.multimedia[0]?.url}
            alt={actualNew.multimedia[0]?.caption || actualNew.title}
          />
        </div>
      </div>
    );
  }




} export default NewDetail;
