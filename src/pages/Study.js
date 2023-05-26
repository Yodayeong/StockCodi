import { useNavigate } from "react-router-dom";
import '../styles/Study.css';
import React, { useEffect, useState } from 'react';

const CatagoryComponent = () =>{
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
  </div>)
}

function MainPageHead() {
  // link
  const moveLogin = useNavigate();
  const moveSignup = useNavigate();

  function goLogin(){
      moveLogin('/login');
  }
  function goSignup(){
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

function MainPageBody() {
    return (
      <div></div>
    );
}

function StudyContainer(){
    return(
        <div>
            <MainPageHead />
            <MainPageBody />
        </div>
    )
}

export default StudyContainer