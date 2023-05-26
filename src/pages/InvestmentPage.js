import { useNavigate } from "react-router-dom";
import '../styles/MainPage.css';
import '../styles/InvestmentPage.css';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';


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

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearch = () => {
      // 검색 기능을 수행하는 로직을 작성하세요
      console.log('Search:', searchQuery);
    };
  
    return (
      <div className="search-bar">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>
            <FiSearch />
          </button>
        </div>
      </div>
    );
  };

function MainBody1(){
    const [loginClicked, setLoginClicked] = useState(false);
    const [signupClicked, setSignupClicked] = useState(true);
  
    const handleLoginClick = () => {
        if(!loginClicked)
        {
          setLoginClicked(!loginClicked);
          setSignupClicked(!signupClicked);
        }
    };
  
    const handleSignupClick = () => {
      if (!signupClicked){
      setLoginClicked(!loginClicked);
      setSignupClicked(!signupClicked);
      }
    };

    return(
        <div>
            <div className="Login">
                <StyledButton clicked={loginClicked} onClick={handleLoginClick}>
                    포트폴리오
                </StyledButton>
            </div>
            <div className="Signup">
                <StyledButton clicked={signupClicked} onClick={handleSignupClick}>
                    주식주문
                </StyledButton>
            </div>
            <div>
                <SearchBar />
            </div>
            <div>

            </div>
        </div>
    );
}

function InvestmentContainer(){
    return (
        <div>
            <div>
                <MainPageHead />
            </div>
            <div>
                <MainBody1 />
            </div>
        </div>
    );
}


export default InvestmentContainer