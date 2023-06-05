import { useNavigate } from "react-router-dom";
import '../styles/MainPage.css';
import phone from '../img/phone.png'
import logo from '../img/logo-green.png'
import Group18403 from '../img/Group18403.png'
import content from '../img/content.png'
import content2 from '../img/content2.jpg'
import content3 from '../img/content3.jpg'
import React, { useEffect, useState } from 'react';

function ContentList() {
  const [contents, setContents] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((data) => setContents(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % contents.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [contents]);

  const slides = [
    contents[0]?.thumbnailUrl,
    contents[1]?.thumbnailUrl,
    contents[2]?.thumbnailUrl,
  ];

  const handleSlideClick = (index) => {
    const content = contents[index];
    window.location.href = 'https://www.youtube.com/watch?v=' + content.youtubeId;
  };

  return (
    <div className="content">
      <p className="content-title">오늘의 추천 콘텐츠</p>
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? "active" : ""}`}
            key={index}
            onClick={() => handleSlideClick(index)}
          >
            <img
              className="centered-image"
              src={slide}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const CatagoryComponent = () =>{
  const movePage = useNavigate();
  function goStudy() {
    movePage('/study');
  }
  function goInvestment() {
    movePage('/investment');
  }
  return (
    <div className='Subheader-container'>    
      <div className="nav-items" onClick={goInvestment}>
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

function Banner() {
  return (
    <div className="banner">
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
        <ContentList/>
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