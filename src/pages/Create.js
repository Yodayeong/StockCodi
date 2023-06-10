import { useNavigate } from "react-router-dom";
import '../styles/Study.css';
import '../styles/Create.css';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

// Nav Bar
const CatagoryComponent = () => {
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

function CreatePageHead() {
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

function CreatePageBody() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");
  const [hashtag1, setHashtag1] = useState(false);
  const [hashtag2, setHashtag2] = useState(false);
  const [hashtag3, setHashtag3] = useState(false);
  const [hashtag4, setHashtag4] = useState(false);
  const [hashtag5, setHashtag5] = useState(false);
  const [hashtag6, setHashtag6] = useState(false);
  const [hashtag7, setHashtag7] = useState(false);

  const handleClick1 = () => {
    setHashtag1(!hashtag1);
  };
  const handleClick2 = () => {
    setHashtag2(!hashtag2);
  };
  const handleClick3 = () => {
    setHashtag3(!hashtag3);
  };
  const handleClick4 = () => {
    setHashtag4(!hashtag4);
  };
  const handleClick5 = () => {
    setHashtag5(!hashtag5);
  };
  const handleClick6 = () => {
    setHashtag6(!hashtag6);
  };
  const handleClick7 = () => {
    setHashtag7(!hashtag7);
  };

  const movePage = useNavigate();

  async function create() {
    var hashtags = new Array();
    if(hashtag1) {
      hashtags.push(1);
    }
    if(hashtag2) {
      hashtags.push(2);
    }
    if(hashtag3) {
      hashtags.push(3);
    }
    if(hashtag4) {
      hashtags.push(4);
    }
    if(hashtag5) {
      hashtags.push(5);
    }
    if(hashtag6) {
      hashtags.push(6);
    }
    if(hashtag7) {
      hashtags.push(7);
    }

    // youtube
    var linkInput = document.getElementById('youtube-link');
    var thumbnailContainer = document.getElementById('thumbnail-container');
    var link = linkInput.value;

    // 유튜브 동영상 ID 추출
    var youtubeId = extractVideoId(link);

    // 썸네일 이미지 URL 생성
    var thumbnailUrl = 'https://img.youtube.com/vi/' + youtubeId + '/0.jpg';

    // // 이미지 요소 생성
    // var thumbnailImage = document.createElement('img');
    // thumbnailImage.src = thumbnailUrl;

    // // 썸네일 이미지를 컨테이너에 추가
    // thumbnailContainer.innerHTML = '';
    // thumbnailContainer.appendChild(thumbnailImage);

    // // 썸네일 이미지에 클릭 이벤트 리스너 추가
    // thumbnailImage.addEventListener('click', function() {
    //   // 클릭 시 유튜브 영상 페이지로 이동
    //   window.location.href = 'https://www.youtube.com/watch?v=' + videoId;
    // });
    
    console.log(youtubeId, thumbnailUrl, title, writer, content, hashtags);
    // api 통신
    let item = {youtubeId, thumbnailUrl, title, writer, content, hashtags};
    let response = await fetch("http://localhost:8080/contents/new", {
        method: 'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
    });
    // let result = await Response.json();
    // localStorage.setItem("user-info", JSON.stringify(result));
    movePage('/');

    // result = await result.json();
    // console.log(result);
    // localStorage.setItem("user-info", JSON.stringify(result))
    // movePage('/');
  }

  function extractVideoId(link) {
    // 유튜브 링크에서 동영상 ID 추출
    var videoId = '';
  
    // 정규식을 사용하여 링크에서 동영상 ID 추출
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = link.match(regExp);
    if (match && match[7].length === 11) {
      videoId = match[7];
    }
  
    return videoId;
  }

  return (
    <div className="study-page-body flex-col">
      <div>
        <p className="create-title">유튜브 링크</p>
        <input id="youtube-link" className="create-input1" type="text" onChange={(e)=>setUrl(e.target.value)}></input>
      </div>
      <div>
        <p className="create-title">강의 제목</p>
        <input className="create-input1" type="text" onChange={(e)=>setTitle(e.target.value)}></input>
      </div>
      <div>
        <p className="create-title">작성자</p>
        <input className="create-input1" type="text" onChange={(e)=>setWriter(e.target.value)}></input>
      </div>
      <div>
        <p className="create-title">상세 설명</p>
        <textarea className="create-input2" onChange={(e)=>setContent(e.target.value)}></textarea>
      </div>
      <div>
        <p className="create-title">해시태그 설정</p>
        <div className="tags-box">
            <div className={`create-tag ${hashtag1 ? 'clicked' : ''}`} onClick={handleClick1}>#투자초보</div>
            <div className={`create-tag ${hashtag2 ? 'clicked' : ''}`} onClick={handleClick2}>#포트폴리오</div>
            <div className={`create-tag ${hashtag3 ? 'clicked' : ''}`} onClick={handleClick3}>#5000만원</div>
            <div className={`create-tag ${hashtag4 ? 'clicked' : ''}`} onClick={handleClick4}>#ETF</div>
            <div className={`create-tag ${hashtag5 ? 'clicked' : ''}`} onClick={handleClick5}>#저축</div>
            <div className={`create-tag ${hashtag6 ? 'clicked' : ''}`} onClick={handleClick6}>#주식유망종목</div>
            <div className={`create-tag ${hashtag7 ? 'clicked' : ''}`} onClick={handleClick7}>#주식투자방법</div>
        </div>
      </div>
      <div className="create-submit" onClick={create}>영상 업로드 하기</div>

      {/* <div id="thumbnail-container"></div> */}
    </div>
  );
}

function CreateContainer() {
  return (
    <div>
      <CreatePageHead />
      <CreatePageBody />
    </div>
  );
}

export default CreateContainer;