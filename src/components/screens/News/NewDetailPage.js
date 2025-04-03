import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MyContext from '../../../context';
import { CiLocationArrow1 } from "react-icons/ci";
import CategoriesBar from './CategoriesBar';

function MostPopularDetail() {

  const { uri, source } = useParams();
  const [actualNew, setActualNew] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { handleGoToPageDetail, KategoriSayfasindanGelenSection, setKategoriSayfasindanGelenSection } = useContext(MyContext);
  const [actualSection, setActualSection] = useState("home");
  //farklı 2 api'den veri çekitğim için resimlerinin hücreleri de farklı olduğundan resim için dinamik bir fonsksiyon aşşağıda bulunmaktadır.
 
 
  const getImageSrc = () => {
    if (actualNew?.media?.[0] || actualNew?.multimedia?.[0]) {
      if (source === 'nyt') {
        return actualNew.multimedia[0].url || 'fallback-image-url.jpg';
      } else if (source === 'mostpopular') {
        return actualNew.media[0]["media-metadata"]?.[2]?.url || 'fallback-image-url.jpg';
      }
    }
    return 'fallback-image-url.jpg'; // Her durumda kullanılacak yedek resim
  };

  const getImageAlt = () => {
    if (actualNew?.media?.[0] || actualNew?.multimedia?.[0]) {
      if (source === 'nyt') {
        return actualNew.multimedia[0].caption || actualNew.title;
      } else if (source === 'mostpopular') {
        return actualNew.media[0]?.caption || actualNew.title;
      }
    }
    return actualNew.title; // Her durumda kullanılacak yedek resim
  }

  const getCopyright = () => {
    if (actualNew?.media?.[0] || actualNew?.multimedia?.[0]) {
      if (source === 'nyt') {
        return actualNew.multimedia[0]?.copyright ? actualNew.multimedia[0]?.copyright : "The New York Times";
      } else if (source === 'mostpopular') {
        return actualNew.media[0]?.copyright ? actualNew.media[0]?.copyright : "The New York Times";
      }
    }
    return actualNew.title; // Her durumda kullanılacak yedek resim
  }

  const getCaption = () => {
    if (actualNew?.media?.[0] || actualNew?.multimedia?.[0]) {
      if (source === 'nyt') {
        return actualNew.multimedia[0]?.caption;
      } else if (source === 'mostpopular') {
        return actualNew.media[0]?.caption;
      }
    }
    return " "

  }
  useEffect(() => {
    if (KategoriSayfasindanGelenSection !== "bos") {
      setActualSection(KategoriSayfasindanGelenSection);
      setKategoriSayfasindanGelenSection("bos");

    } else if (KategoriSayfasindanGelenSection === "bos") {
      setActualSection("home");
    }

  }, [KategoriSayfasindanGelenSection, actualSection]);

  useEffect(() => {
    const MyApiKey = "jragcoZD3twCzmu2uJV6ANvU8usEAyTx";
    const apiUrl = source === 'nyt'
      ? `https://api.nytimes.com/svc/topstories/v2/${actualSection}.json?api-key=${MyApiKey}`
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
    <div className='container flex flex-row gap-5 mt-5 justify-between' style={{marginBottom:'25%'}}>
      <div className='container-content'>
        <h1 className='fw-bold mt-5'>{actualNew.title}</h1>
        <p className='mini_news_category'>
          /{actualNew.section.charAt(0).toUpperCase() + actualNew.section.slice(1)} /
          {actualNew.subsection.charAt(0).toUpperCase() + actualNew.subsection.slice(1)}
        </p>
        {
          <img style={{ width: '100%' }}
            src={getImageSrc()}
            alt={getImageAlt()}
          />}
        <p className='mini_news_category'>
          / {getCopyright()}
        </p>
        <p className='detail-new-articles d-block fs-2 pt-5 pb-5' style={{ marginTop: '20%', borderTop: '2px solid black' }}>
          <p>{actualNew.abstract}</p>
          <br></br>
          <p>{getCaption()}</p>
          <p className='mini_news_category fs-5'>{actualNew.updated_date}</p>
          <button onClick={(e) => handleGoToPageDetail(actualNew.url)} className='custom-button-1'>
            Show To New Page <CiLocationArrow1 className='icon-custom' />
          </button>
        </p>
      </div>
      <CategoriesBar style={{ width: '20%' }}></CategoriesBar>
    </div>
  );
} export default MostPopularDetail;
