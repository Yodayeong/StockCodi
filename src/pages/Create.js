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
  return (
    <div className="study-page-body flex-col">
      <div>
        <p className="create-title">유튜브 주소</p>
        <input className="create-input1" type="text"></input>
      </div>
      <div>
        <p className="create-title">강의 제목</p>
        <input className="create-input1" type="text"></input>
      </div>
      <div>
        <p className="create-title">상세 설명</p>
        <textarea className="create-input2"></textarea>
      </div>
      <div>
        <p className="create-title">해시태그 설정</p>
        <div className="tags-box">
            <div className="create-tag">#투자초보</div>
            <div className="create-tag">#포트폴리오</div>
            <div className="create-tag">#5000만원</div>
            <div className="create-tag">#ETF</div>
            <div className="create-tag">#저축</div>
            <div className="create-tag">#주식유망종목</div>
            <div className="create-tag">#주식투자방법</div>
        </div>
      </div>
      <div className="create-submit">영상 업로드 하기</div>
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
