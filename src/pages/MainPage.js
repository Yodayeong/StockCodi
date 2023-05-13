import '../styles/MainPage.css';
import phone from '../img/phone.png';
import Group18403 from '../img/Group18403.png'
import React, { useEffect, useState } from 'react';

function MainPageHead(){
    return(
        <div className = "header-container">
            <div className = "Stocodi">
                Stocodi 
            </div>
            <div className = "InvestmentExperiment">
                투자실험 
            </div>
            <div className = "Study">
                스터디 
            </div>
            <div className = "Community">
                커뮤니티 
            </div>
            <div className = "Login">
                로그인 
            </div>
            <div className = "Signup">
                회원가입 
            </div>
        </div>
    )
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
        <div>
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