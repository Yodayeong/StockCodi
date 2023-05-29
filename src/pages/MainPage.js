import { useNavigate } from "react-router-dom";
import '../styles/MainPage.css';
import phone from '../img/phone.png'
import logo from '../img/logo-green.png'
import Group18403 from '../img/Group18403.png'
import React, { useEffect, useState } from 'react';

const CatagoryComponent = () =>{
  const movePage = useNavigate();
  function goStudy() {
    movePage('/study');
  }
  return (
    <div className='Subheader-container'>    
      <div className="nav-items">
        투자실혐
      </div>
      <div className="nav-items" onClick={goStudy}>
        스터디
      </div>
      <div className="nav-items">
        커뮤니티
      </div>
    </div>
  );
}

function MainPageHead() {
  // link
  const movePage = useNavigate();

  function goHome() {
    movePage('/');
  }
  function goLogin() {
    movePage('/login');
  }
  function goSignup() {
    movePage('/signup');
  }

  return (
    <div className="header-container">
      <div className="Stocodi" onClick={goHome}>Stocodi</div>
      <CatagoryComponent />
      <div className="account-items" onClick={goLogin}>
        로그인
      </div>
      <div className="account-items" onClick={goSignup}>
        회원가입
      </div>
    </div>
  );
}

// function ImageTable() {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchYouTubeVideos = async () => {
//       try {
//         const response = await axios.get(
//           'https://www.googleapis.com/youtube/v3/search', {
//             params: {
//               part: 'snippet',
//               channelId: '',
//               key: '',
//               maxResults: 4,
//               type: 'video',
//             },
//           }
//         );

//         const videoItems = response.data.items;
//         const videoIds = videoItems.map((video) => video.id.videoId);
//         const videoDetails = await fetchVideoDetails(videoIds);

//         const videosWithDetails = videoItems.map((video, index) => ({
//           id: video.id.videoId,
//           snippet: video.snippet,
//           duration: videoDetails[index].contentDetails.duration,
//         }));

//         setVideos(videosWithDetails);
//       } catch (error) {
//         console.error('Error fetching YouTube videos:', error);
//       }
//     };

//     fetchYouTubeVideos();
//   }, []);

//   const fetchVideoDetails = async (videoIds) => {
//     try {
//       const response = await axios.get(
//         'https://www.googleapis.com/youtube/v3/videos', {
//           params: {
//             part: 'contentDetails',
//             id: videoIds.join(','),
//             key: '',
//           },
//         }
//       );

//       const videoDetails = response.data.items;
//       return videoDetails;
//     } catch (error) {
//       console.error('Error fetching video details:', error);
//       return [];
//     }
//   };

//   const formatDuration = (duration) => {
//     const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
//     const hours = match[1] ? parseInt(match[1].slice(0, -1)) : 0;
//     const minutes = match[2] ? parseInt(match[2].slice(0, -1)) : 0;
//     const seconds = match[3] ? parseInt(match[3].slice(0, -1)) : 0;

//     return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className="video-gallery-container">
//       <div className="video-gallery">
//         {videos.map((video, index) => (
//           <div key={index} className="video-item">
//             <a
//               href={`https://www.youtube.com/watch?v=${video.id}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={video.snippet.thumbnails.medium.url}
//                 alt={`Video ${index}`}
//                 className="video-thumbnail"
//               />
//             </a>
//             <div className="video-info">
//               <div className="video-title">{video.snippet.title}</div>
//               <div className='video-metadata'>
//                 <p className="video-upload">{video.snippet.channelTitle}</p>
//                 <p className="video-duration">{formatDuration(video.duration)}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

function Banner() {
  return (
    <div>
      <div className="flex-row">
        <div className="text-box">
          <img className="logo-img" src={logo}></img>
          <p className="banner-text">투자가 어려우신가요?</p>
          <p className="banner-text">함께 연습해보면 어떨까요!</p>
        </div>
        <img className="banner-img" src={phone}></img>
        </div>
    </div>
  );
}

function MainPageBody() {
    return (
      <div class="main-body">
        <Banner/>
      </div>
    );
}
  
function MainPageContainer(){
    return(
        <div>
            <MainPageHead />
            <MainPageBody />
        </div>
    )
}


export default MainPageContainer