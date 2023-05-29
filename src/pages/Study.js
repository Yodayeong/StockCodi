import { useNavigate } from "react-router-dom";
import '../styles/Study.css';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ad from '../img/ad.png'
import lecture1 from '../img/lecture1.png'
import lecture2 from '../img/lecture2.png'
import lecture3 from '../img/lecture3.png'

// Nav Bar
const CatagoryComponent = () => {
  const movePage = useNavigate();
  function goStudy() {
    movePage('/study');
  }
  return (
    <div className='Subheader-container'>    
      <div className="nav-items">
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

function StudyPageHead() {
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

// Search
function Search() {
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
        <input type="text" placeholder="콘텐츠 검색" value={searchQuery} onChange={handleInputChange} />
        <button onClick={handleSearch}>
          <FiSearch />
        </button>
      </div>
    </div>
  );
}

// Toggle
// function Toggle() {
//     const [contents, setContents] = useState([
//         { id: 1, title: '컨텐츠 1', likes: 10 },
//         { id: 2, title: '컨텐츠 2', likes: 5 },
//         { id: 3, title: '컨텐츠 3', likes: 8 },
//       ]);
//       const [isLatest, setIsLatest] = useState(true);
    
//       const sortContents = () => {
//         const sortedContents = [...contents];
//         if (isLatest) {
//           sortedContents.sort((a, b) => b.id - a.id); // 최신순 정렬
//         } else {
//           sortedContents.sort((a, b) => b.likes - a.likes); // 좋아요순 정렬
//         }
//         setContents(sortedContents);
//       };
    
//       const toggleSort = () => {
//         setIsLatest((prevState) => !prevState);
//         sortContents(); // 정렬 함수 호출
//       };
    
//       return (
//         <div>
//           <div className="sort-toggle">
//             <button onClick={toggleSort}>
//               {isLatest ? '최신순' : '좋아요순'}
//             </button>
//           </div>
//           <div className="content-list">
//             {contents.map((content) => (
//               <div key={content.id}>
//                 <h3>{content.title}</h3>
//                 <p>Likes: {content.likes}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       );
// }

// Toggle
function Toggle() {
  return (
    <div>
      <select className="select" aria-label="Sorting Options">
        <option value="latest">최신순</option>
        <option value="likes">좋아요순</option>
        <option value="views">조회순</option>
      </select>
    </div>
  );

}

// Banner
function Banner() {
  return (
    <div className="flex-row">
      {/* lecture-box */}
      <div className="lecture-box">
        <p className="banner-title">최신 업데이트 강의</p>
        <div className="lectures">
          <div className="lecture">
            <img className="lecture-img" src={lecture1}></img>
            <div className="lecture-text">
              <p className="lecture-title">투자 초보자들이 흔히 하는 5가지 실수</p>
              <p className="lecture-writer">박곰희</p>
            </div>
          </div>
          <div className="lecture">
            <img className="lecture-img" src={lecture2}></img>
            <div className="lecture-text">
              <p className="lecture-title">초보 주식투자자들이 흔히 하는 실수 박곰희 1부 [후랭이 TV]</p>
              <p className="lecture-writer">박곰희</p>
            </div>
          </div>
        </div>
      </div>
      {/* tag-box */}
      <div className="tag-box">
        <p className="banner-title">인기 태그</p>
        <div className="flex-row">
          <div className="tag">#투자초보</div>
          <div className="tag">#포트폴리오</div>
        </div>
        <div className="flex-row">
          <div className="tag">#5000만원</div>
          <div className="tag">#ETF</div>
          <div className="tag">#저축</div>
        </div>
        <div className="flex-row">
          <div className="tag">#주식유망종목</div>
          <div className="tag">#주식투자방법</div>
        </div>
      </div>
      {/* ad-box */}
      <div className="ad-box">
        <p className="banner-title">오늘의 이벤트</p>
        <img className="ad-img" src={ad}></img>
      </div>
    </div>
  );
}

// Content
function Content() {
  return(
    <div>
      <div className="flex-row contents">
        <div className="content-box">
          <img className="content-img" src={lecture1}></img>
          <div className="content-text">
            <p className="content-title">투자 초보자들이 흔히 하는 5가지 실수</p>
            <p className="content-writer">박곰희</p>
          </div>
        </div>
        <div className="content-box">
          <img className="content-img" src={lecture1}></img>
          <div className="content-text">
            <p className="content-title">투자 초보자들이 흔히 하는 5가지 실수</p>
            <p className="content-writer">박곰희</p>
          </div>
        </div>
        <div className="content-box">
          <img className="content-img" src={lecture1}></img>
          <div className="content-text">
            <p className="content-title">투자 초보자들이 흔히 하는 5가지 실수</p>
            <p className="content-writer">박곰희</p>
          </div>
        </div>
        <div className="content-box">
          <img className="content-img" src={lecture1}></img>
          <div className="content-text">
            <p className="content-title">투자 초보자들이 흔히 하는 5가지 실수</p>
            <p className="content-writer">박곰희</p>
          </div>
        </div>
        <div className="content-box">
          <img className="content-img" src={lecture1}></img>
          <div className="content-text">
            <p className="content-title">투자 초보자들이 흔히 하는 5가지 실수</p>
            <p className="content-writer">박곰희</p>
          </div>
        </div>
        <div className="content-box">
          <img className="content-img" src={lecture1}></img>
          <div className="content-text">
            <p className="content-title">투자 초보자들이 흔히 하는 5가지 실수</p>
            <p className="content-writer">박곰희</p>
          </div>
        </div>
        <div className="content-box">
          <img className="content-img" src={lecture1}></img>
          <div className="content-text">
            <p className="content-title">투자 초보자들이 흔히 하는 5가지 실수</p>
            <p className="content-writer">박곰희</p>
          </div>
        </div>
        <div className="content-box">
          <img className="content-img" src={lecture1}></img>
          <div className="content-text">
            <p className="content-title">투자 초보자들이 흔히 하는 5가지 실수</p>
            <p className="content-writer">박곰희</p>
          </div>
        </div>
        <div className="content-box">
          <img className="content-img" src={lecture1}></img>
          <div className="content-text">
            <p className="content-title">투자 초보자들이 흔히 하는 5가지 실수</p>
            <p className="content-writer">박곰희</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudyPageBody() {
  const movePage = useNavigate();
  function goCreate() {
    movePage('/study/create');
  }
  return (
    <div className="study-page-body">
      <div className="flex-row">
        <Search />
        <Toggle />
      </div>
      <Banner />
      <Content />
      <div className="study-create" onClick={goCreate}>강의 업로드하기</div>
    </div>
  );
}

function StudyContainer() {
  return (
    <div>
      <StudyPageHead />
      <StudyPageBody />
    </div>
  );
}

export default StudyContainer;