import React, { useEffect } from 'react'



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
      <div className='d-flex align-items-center m-2'>
        <img style={{borderRadius:'100%',width:'4rem',height:'4rem',marginRight:'10px'}} src='/images/logoicon.jpg'></img>
        <h1 style={{ fontWeight: 'bold', marginRight: '5px' }}>Latest Videos</h1>
      </div>
      <div id="videoContainer" className='videoContainer'></div>
    </div>

  )
}