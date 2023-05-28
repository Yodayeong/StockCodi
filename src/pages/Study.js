import { useNavigate } from "react-router-dom";
import '../styles/Study.css';
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

function StudyPageHead() {
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

function Toggle() {
  return (
    <div>
      <select className="form-select" aria-label="Sorting Options">
        <option value="latest">최신순</option>
        <option value="likes">좋아요순</option>
        <option value="views">조회순</option>
      </select>
    </div>
  );

}

function StudyPageBody() {
  return (
    <div class="study-page-body">
      <div className="flex-row">
        <Search />
        <Toggle />
      </div>
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
