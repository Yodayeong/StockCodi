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

function DetailPage() {
  const movePage = useNavigate();
  function goStudy() {
    movePage('/study');
  }
  function goInvestment() {
    movePage('/investment');
  }
  return(
    <div className="detail-page">
      <h1 className="detail-main">다양한 서비스를 경험해보세요!</h1>
      <p className="detail-text">스토코디에서 다양한 경험을 얻어가세요.</p>

      <div className="detail-container">
        <div className="detail-box">
          <h3 className="small-title">투자실험</h3>
          <p className="small-text">포트폴리오에서 설정한 자산으로</p>
          <p className="small-text">모의투자를 경험하실 수 있습니다.</p>
          <button className="detail-button" onClick={goInvestment}>투자실험 참여하기</button>
        </div>
        <div className="detail-box">
          <h3 className="small-title">스터디</h3>
          <p className="small-text">다양한 강의를 통해 </p>
          <p className="small-text">필요한 지식을 쌓을 수 있습니다.</p>
          <button className="detail-button" onClick={goStudy}>스터디 참여하기</button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return(
    <div className="footer">
      <h1 className="footer-title"><span>Stocodi</span> | 개인정보처리방침 | 이용약관</h1>
      <p className="footer-text">(주)스토코디 | 대표자: 김재홍 | 사업자번호: 499-81-00612 사업자 정보 확인</p>
      <p className="footer-text">주소: 경기도 성남시 분당구 대왕판교로 660 유스페이스 1A동 405호</p>
      <p className="footer-text copyright">@STOCODI.ALL RIGHTS RESERVED</p>
    </div>
  );
}
  
function MainPageContainer(){
    return(
        <div>
            <MainPageHead />
            <MainPageBody />
            <DetailPage/>
            <Footer/>
        </div>
    )
}


export default MainPageContainer