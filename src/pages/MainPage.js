import { useNavigate } from "react-router-dom";
import '../styles/MainPage.css';
import phone from '../img/phone.png';
import Group18403 from '../img/Group18403.png'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';




const StyledButton = styled.button`
  background-color: ${props => (props.clicked ? '#00A969' : 'white')};
  color : ${props => (props.clicked ? 'white' : '#7D8790')};
  border: none;
  font-size : 14px;
  font-weight : bold;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
`;

const CatagoryComponent = () =>{
  const [selectedCatagory, setSelectedCatagory] = useState(1);

  const handleCategoryChange = (category) =>{
    setSelectedCatagory(category);
  };

  return (<div className='Subheader-container'>
      <div className={selectedCatagory === 1 ? "InvestmentExperimentSelected" : "InvestmentExperiment"} onClick={() => handleCategoryChange(1)}>투자실험</div>
      <div className={selectedCatagory === 2 ? "StudySelected" : "Study"} onClick={() => handleCategoryChange(2)}>스터디</div>
      <div className={selectedCatagory === 3 ? "CommunitySelected" : "Community"} onClick={() => handleCategoryChange(3)}>커뮤니티</div>
  </div>)
}




const Button = ({clickState, name, onClick}) => {
  const [clicked, setClicked] = useState(clickState);
  const handleClick = () => {
      setClicked(!clicked);
      onClick()
  };

  return (
    <StyledButton clicked={clicked} onClick={handleClick}>
      <div className='Logsi'>{name}</div>
    </StyledButton>
  );
};


function MainPageHead() {
  const [loginClicked, setLoginClicked] = useState(false);
  const [signupClicked, setSignupClicked] = useState(true);
  // link
  const moveLogin = useNavigate();
  const moveSignup = useNavigate();

  const handleLoginClick = () => {
      if(!loginClicked)
      {
        setLoginClicked(!loginClicked);
        setSignupClicked(!signupClicked);
        moveLogin('/login');
      }
  };

  const handleSignupClick = () => {
    if (!signupClicked){
    setLoginClicked(!loginClicked);
    setSignupClicked(!signupClicked);
    moveSignup('/signup');
    }
  };

  // // Login Link
  // const moveLogin = useNavigate();

  // function goLogin(){
  //     moveLogin('/login');
  // }

  // // Signup Link
  // const moveSignup = useNavigate();

  // function goSignup(){
  //     moveSignup('/signup');
  // }

  return (
    <div className="header-container">
      <div className="Stocodi">Stocodi</div>
      <CatagoryComponent />
      <div className="Login">
        <StyledButton clicked={loginClicked} onClick={handleLoginClick}>
          로그인
        </StyledButton>
      </div>
      <div className="Signup">
        <StyledButton clicked={signupClicked} onClick={handleSignupClick}>
          회원가입
        </StyledButton>
      </div>
    </div>
  );
}



function ImageTable() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search', {
            params: {
              part: 'snippet',
              channelId: '',
              key: '',
              maxResults: 4,
              type: 'video',
            },
          }
        );

        const videoItems = response.data.items;
        const videoIds = videoItems.map((video) => video.id.videoId);
        const videoDetails = await fetchVideoDetails(videoIds);

        const videosWithDetails = videoItems.map((video, index) => ({
          id: video.id.videoId,
          snippet: video.snippet,
          duration: videoDetails[index].contentDetails.duration,
        }));

        setVideos(videosWithDetails);
      } catch (error) {
        console.error('Error fetching YouTube videos:', error);
      }
    };

    fetchYouTubeVideos();
  }, []);

  const fetchVideoDetails = async (videoIds) => {
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'contentDetails',
            id: videoIds.join(','),
            key: '',
          },
        }
      );

      const videoDetails = response.data.items;
      return videoDetails;
    } catch (error) {
      console.error('Error fetching video details:', error);
      return [];
    }
  };

  const formatDuration = (duration) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = match[1] ? parseInt(match[1].slice(0, -1)) : 0;
    const minutes = match[2] ? parseInt(match[2].slice(0, -1)) : 0;
    const seconds = match[3] ? parseInt(match[3].slice(0, -1)) : 0;

    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="video-gallery-container">
      <div className="video-gallery">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={`Video ${index}`}
                className="video-thumbnail"
              />
            </a>
            <div className="video-info">
              <div className="video-title">{video.snippet.title}</div>
              <div className='video-metadata'>
                <p className="video-upload">{video.snippet.channelTitle}</p>
                <p className="video-duration">{formatDuration(video.duration)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





function MainPageBody() {
    return (
      <div className="video-gallery-container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="main-text">
            투자가 어려우신가요?
            <br />
            함께 연습해보면 어떨까요!
          </div>
          <div className='img1'>
            <img
              src={phone}
              alt="phone"
              style={{ width: "50%", height: "auto", float: "right", marginLeft: "10px"}}
            />
          </div>
        </div>
        <div className = "img2">
          <img
            src={Group18403}
            alt="group"
            style={{ verticalAlign: "bottom", marginRight: "100px"}}
          />
        </div>
        <div className='ImgTable'>
          <div className='contents-text'>
              교육 컨텐츠
          </div>

          <div>
              <ImageTable />
          </div>
        </div>
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