import React, { useEffect } from 'react'
import { CiYoutube } from "react-icons/ci";


export default function LastVideos() {
  const apiKey = 'AIzaSyDRxsMwUmKxla-R3Xg3dc90Bdx4wTLeuME';
  const channel_id = 'UCqnbDFdCpuN8CMEg0VuEBqA'
  const apiURL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channel_id}&part=snippet&type=video&order=date&maxResults=4`;
  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        if (data.items && Array.isArray(data.items)) {
          const videos = data.items;
          let videoHtml = '';
          videos.forEach(video => {
            const videoId = video.id.videoId;
            const title = video.snippet.title;
            const thumbnail = video.snippet.thumbnails.medium.url;
            videoHtml += `
          <div>
           <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
              <img src="${thumbnail}" alt="${title}">
            </a>
            <h5>${title}</h5>
          </div>
        `;
          });
          document.getElementById('videoContainer').innerHTML = videoHtml;
        } else {
          console.error('No videos found or incorrect data format');
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });

  }, []);


  return (
    <div className='container m-5 d-block'>
      <div className='d-flex'>
        <h1 style={{ fontWeight: 'bold', marginRight: '5px' }}>Latest Videos</h1>
        <CiYoutube style={{ fontSize: '3rem' }} />
      </div>
      <div id="videoContainer" style={{ gap: '5px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></div>
    </div>

  )
}