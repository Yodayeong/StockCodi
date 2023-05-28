import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import styled from 'styled-components';
import phone from '../img/apple.png';
import { FiSearch } from 'react-icons/fi';

const StyledButton = styled.button`
  background-color: ${props => (props.clicked ? '#00A969' : 'white')};
  color: ${props => (props.clicked ? 'white' : '#7D8790')};
  border: none;
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
`;

const ChartContainer = styled.div`
  flex: 2;
  background-color: #f0f0f0;
  border: 1px solid black; /* 검정색 border 추가 */
`;

const VolumeContainer = styled.div`
  flex: 1;
  background-color: #eaeaea;
  border: 1px solid black; /* 검정색 border 추가 */
`;

const InformationContainer = styled.div`
  flex: 1;
  background-color: #f8f8f8;
  border: 1px solid black; /* 검정색 border 추가 */
`;

const StockInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StockInfoLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

const StockInfoText = styled.div`
  font-weight: bold;
`;

const TopBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  padding: 16px;
`;

const HeaderComponent = () => {
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="header-container">
      <div className="Stocodi">Stocodi</div>
      <div className="nav-items">투자실혐</div>
      <div className="nav-items">스터디</div>
      <div className="nav-items">커뮤니티</div>
      <div className="account-items" onClick={handleLoginClick}>
        로그인
      </div>
      <div className="account-items" onClick={handleSignupClick}>
        회원가입
      </div>
    </div>
  );
};

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search:', searchQuery);
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="종목 검색"
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

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState('portfolio');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="button-group">
      <StyledButton
        clicked={activeButton === 'portfolio'}
        onClick={() => handleButtonClick('portfolio')}
      >
        포트폴리오
      </StyledButton>
      <StyledButton
        clicked={activeButton === 'stockOrder'}
        onClick={() => handleButtonClick('stockOrder')}
      >
        주식주문
      </StyledButton>
    </div>
  );
};

const InvestmentContainer = () => {
  return (
    <div className="InvestmentContainer">
      <div className="HeaderContainer">
        <HeaderComponent />
      </div>
      <div className="Container">
      <div className="MainBody">
          <ButtonGroup style={{ flex: 1 }}/>
          <SearchBar style={{ flex: 1 }}/>
      </div>
      <Container >
        <TopBox style = {{width: "60%", marginLeft : "2.5vw"}}>
            <StockInfoContainer style={{ display: 'flex', alignItems: 'center' }}>
                <StockInfoLogo src={phone} alt="Logo" style={ {marginLeft: '5vw'}}/>
                <div style={{ marginLeft: '10', display: 'flex', justifyContent: 'space-between' }}>
                <StockInfoText>애플</StockInfoText>
                <StockInfoText style={{ marginLeft: '5vw' }}>$158.88</StockInfoText>
                <StockInfoText style={{ marginLeft: '5vw' }}>+0.67%</StockInfoText>
                </div>
            </StockInfoContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <StockInfoText style={{ marginRight: '5vw' }}>1.06</StockInfoText>
                <StockInfoText style={{ marginRight: '5vw' }}>68,483,589</StockInfoText>
                <StockInfoText style={{ marginRight: '5vw' }}>거래대금     $109억 2,896만</StockInfoText>
            </div>
        </TopBox>


        <ChartContainer>
          {/* 주식 차트 컴포넌트 */}
        </ChartContainer>
        <VolumeContainer>
          {/* 거래량 컴포넌트 */}
        </VolumeContainer>
        <InformationContainer>
          {/* 추가 정보 컴포넌트 */}
        </InformationContainer>
      </Container>
      </div>
    </div>

  );
};

export default InvestmentContainer;
