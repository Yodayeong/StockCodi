import '../styles/MainPage.css';
import phone from '../img/phone.png';
import Group18403 from '../img/Group18403.png'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';




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

function ImageTable(){
    const [images, setImages] = useState([]);

    useEffect(() => {
        // 서버에서 이미지 url을 받아온다는 가정
        const imageUrls = [
          'https://example.com/image1.jpg',
          'https://example.com/image2.jpg',
          'https://example.com/image3.jpg',
          'https://example.com/image4.jpg',
        ];
        setImages(imageUrls);
      }, []);
    
      return (
        <table>
          <tbody>
            <tr>
              {images.slice(0, 4).map((url, index) => (
                <td key={index}>
                  <img src={url} alt={`Image ${index}`} width="200" height="200" />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      );
}


function MainPageBody() {
    return (
      <div>
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
        <div className='contents-text'>
            교육 컨텐츠
        </div>

        <div>
            <ImageTable />
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