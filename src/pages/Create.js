import { useNavigate } from "react-router-dom";
import '../styles/Study.css';
import '../styles/Create.css';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

// Nav Bar
const CatagoryComponent = () => {
  return (
    <div className='Subheader-container'>    
      <div className="nav-items">
        투자실혐
      </div>
      <div className="nav-items">
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
  const moveLogin = useNavigate();
  const moveSignup = useNavigate();

  function goLogin() {
    moveLogin('/login');
  }
  
  function goSignup() {
    moveSignup('/signup');
  }

  return (
    <div className="header-container">
      <div className="Stocodi">Stocodi</div>
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

// Youtube API key
// AIzaSyD2ktRW2Fofr45rCu_ENCXMNcDKrY9opxY

function CreatePageBody() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [detail, setDetail] = useState("");
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
    var array = new Array();
    if(hashtag1) {
      array.push(1);
    }
    if(hashtag2) {
      array.push(2);
    }
    if(hashtag3) {
      array.push(3);
    }
    if(hashtag4) {
      array.push(4);
    }
    if(hashtag5) {
      array.push(5);
    }
    if(hashtag6) {
      array.push(6);
    }
    if(hashtag7) {
      array.push(7);
    }

    console.log(url, title, writer, detail, array);
    // api 통신
    // let item = {url, title, writer, detail, array};
    // let result = await fetch("http://13.125.105.227:8080/member/login", {
    //     method: 'POST',
    //     body:JSON.stringify(item),
    //     headers:{
    //         "Content-Type":"application/json",
    //         "Accept":"application/json"
    //     },
    // }).then(res=>{
    //     console.log(res);
    // })
    // result = await result.json();
    // localStorage.setItem("user-info", JSON.stringify(result))
    movePage('/');
  }

  return (
    <div className="study-page-body flex-col">
      <div>
        <p className="create-title">유튜브 주소</p>
        <input className="create-input1" type="text" onChange={(e)=>setUrl(e.target.value)}></input>
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
        <textarea className="create-input2" onChange={(e)=>setDetail(e.target.value)}></textarea>
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
