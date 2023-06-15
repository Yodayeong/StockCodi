import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import phone from '../img/apple.png';
import { FiSearch } from 'react-icons/fi';
import '../styles/InvestmentPage.css';
import { ChartCanvas, Chart } from 'react-stockcharts';
import { CandlestickSeries } from 'react-stockcharts/lib/series';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import { discontinuousTimeScaleProvider } from 'react-stockcharts/lib/scale';
import { utcDay } from 'd3-time';
import ReactApexChart from 'react-apexcharts';
import ReactDOM from 'react-dom';
import ApexCharts from 'apexcharts';
import axios from 'axios';

//button
const StyledButton = styled.button`
  background-color: ${props => (props.clicked ? '#00A969' : 'white')};
  color: ${props => (props.clicked ? 'white' : '#7D8790')};
  border: none;
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  justifyContent: center;
  width: 120px;
  line-height: 2;
`;

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState('portfolio');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="button-group" style={{ display: 'flex', flexDirection: 'row' }}>
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


function PieChart() {
    const [series, setSeries] = useState([44, 55, 41, 17, 15]);
    const options = {
      chart: {
        type: 'donut',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
              height: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  
    return (
      <div id="chart">
        <ReactApexChart options={options} series={series} type="donut" />
      </div>
    );
  }
  


// Search
function Search({ onSearchResults }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // 검색어를 서버로 전송하는 로직을 작성합니다.
    axios.get(`http://115.85.183.174:8080/search?query=${searchQuery}`)
      .then((response) => {
        // 서버로부터 받은 응답을 처리합니다.
        console.log(response.data);
        setSearchResults(response.data);
        onSearchResults(response.data); // 검색 결과를 전달합니다.
      })
      .catch((error) => {
        // 에러 처리를 수행합니다.
        console.error(error);
      });
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input type="text" placeholder="종목 검색" value={searchQuery} onChange={handleInputChange} />
        <button onClick={handleSearch}>
          검색
        </button>
      </div>

      {searchResults.length > 0 && (
        <div className="search-results">
          <h2>검색 결과</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}



function StockChart() {
    const [series, setSeries] = useState([]);
  
    useEffect(() => {
      // 데이터를 가져오는 함수를 정의합니다.
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/stockdata');
          const data = response.data; // 가져온 데이터를 사용합니다.
          // 가져온 데이터를 series 상태로 설정합니다.
          setSeries([
            {
              data: data.map(item => ({
                x: new Date(item.x),
                y: item.y,
              })),
            },
          ]);
        } catch (error) {
          console.error('데이터를 가져오는 중 에러가 발생했습니다:', error);
        }
      };
  
      // 컴포넌트가 마운트될 때 fetchData 함수를 호출합니다.
      fetchData();
    }, []);
  
    const options = {
      chart: {
        type: 'candlestick',
        height: 350,
      },
      title: {
        text: 'CandleStick Chart',
        align: 'left',
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    };
  
    return (
      <div id="chart">
        <ReactApexChart options={options} series={series} type="candlestick" height={350} />
      </div>
    );
  }
  
  function CashChart() {
    const chartRef = useRef(null);
  
    useEffect(() => {
      const data = [
        1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
        5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
        48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
      ];
  
      const fillDataArray = (data, length) => {
        const newData = [];
        for (let i = 0; i < length; i++) {
          newData.push(data[i % data.length]);
        }
        return newData;
      };
  
      const options = {
        series: [
          {
            name: 'Cash Flow',
            data: fillDataArray(data, 58)
          }
        ],
        chart: {
          type: 'bar',
          height: 150
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [
                {
                  from: -100,
                  to: -46,
                  color: '#F15B46'
                },
                {
                  from: -45,
                  to: 0,
                  color: '#F15B46'
                },
                {
                  from: 0,
                  to: 100,
                  color: '#FEB019'
                }
              ]
            },
            columnWidth: '80%'
          }
        },
        dataLabels: {
          enabled: false
        },
        yaxis: {
          title: {
            text: 'Growth'
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + '%';
            }
          }
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
            '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
            '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
            '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
            '2013-07-01', '2013-08-01', '2013-09-01'
          ],
          labels: {
            rotate: -90
          }
        }
      };
  
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();
  
      // 컴포넌트 언마운트 시 차트 객체 제거
      return () => {
        chart.destroy();
      };
    }, []);
  
    return <div id="chart" ref={chartRef} />;
  }
  
  const Toggle = () => {
    const [portfolioNames, setPortfolioNames] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
  
    useEffect(() => {
      fetchPortfolioNames();
    }, []);
  
    const fetchPortfolioNames = async () => {
      try {
        const response = await axios.get('http://115.85.183.174:8080/api/portfolio/items');
        const data = response.data;
        setPortfolioNames(data);
      } catch (error) {
        console.error('Error fetching portfolio names:', error);
      }
    };
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const handleCreatePortfolio = async () => {
      console.log('시발시발시발시발');
      try {
        const response = await axios.post('http://115.85.183.174:8080/api/portfolio/new', {
          initialCash: 100000,
          portfolioName: 'account 1',
          currentCash: 100000,
          email: 'woghd@naver.com',
          totalAsset: 100000,
        });
        console.log('Portfolio created:', response.data);
        // Do something with the response if needed
      } catch (error) {
        console.error('Error creating portfolio:', error);
      }
    };
  
    return (
      <div>
        <select
          style={{
            fontWeight: 'bold',
            width: '130px',
            fontSize: '10px',
            marginLeft: '10px',
            border: 'none',
          }}
          aria-label="Sorting Options"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          {portfolioNames.length === 0 && (
            <option value="create">포트폴리오 생성</option>
          )}
          {portfolioNames.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
        {selectedOption === 'create' && (
          <button onClick={handleCreatePortfolio}>포트폴리오 생성</button>
        )}
      </div>
    );
  };
  
  
  function TextFieldWithButtons({ value, onChange, onLeftButtonClick, onRightButtonClick, postfix }) {
    return (
      <div className="text-field-with-buttons" style={{ display: 'flex', alignItems: 'center' }}>
        <button
          style={{
            borderRadius: '40% 0 0 40%',
            width: '45px',
            height: '36px',
            backgroundColor: '#F2FFFA',
            border: '1px solid #D9D9D9',
            fontSize: '20px',
          }}
          onClick={onLeftButtonClick}
        >
          -
        </button>
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <input
            type="text"
            value={value}
            onChange={onChange}
            style={{
              width: '100%',
              height: '32px',
              border: 'solid 1px #D9D9D9',
              paddingLeft: '8px',
              paddingRight: '32px',
            }}
          />
          {postfix && (
            <span
              style={{
                position: 'absolute',
                right: '8px',
                color: '#555555',
                fontSize: '12px',
              }}
            >
              {postfix}
            </span>
          )}
        </div>
        <button
          style={{
            borderRadius: '0 40% 40% 0',
            width: '45px',
            height: '36px',
            backgroundColor: '#F2FFFA',
            border: '1px solid #D9D9D9',
            fontSize: '20px',
          }}
          onClick={onRightButtonClick}
        >
          +
        </button>
      </div>
    );
  }
  


  const ScrollPage = () => {
    const [data, setData] = useState([]); // 페이지에 표시할 데이터 상태
    const [isLoading, setIsLoading] = useState(true); // 데이터 로딩 상태
  
    useEffect(() => {
      // 페이지 컴포넌트가 마운트되었을 때 데이터를 가져오는 비동기 함수 호출
      fetchData();
    }, []);
  
    const fetchData = async () => {
      // 데이터를 가져오는 비동기 함수
      try {
        const response = await axios.get('http://localhost:3000/stockdata');
        setData(response.data); // 가져온 데이터를 상태에 설정
        setIsLoading(false); // 데이터 로딩 완료 상태로 설정
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // 데이터 로딩 실패 상태로 설정
      }
    };
  
    return (
      <div style={{ height: '500px', overflow: 'auto' }}>
        {isLoading ? (
          <p>Loading...</p> // 데이터 로딩 중에는 로딩 메시지 표시
        ) : (
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li> // 데이터를 리스트 아이템으로 표시
            ))}
          </ul>
        )}
      </div>
    );
  };

  const handleBuyButtonClick = async (portfolioId, text2, searchResults) => {
    try {
      const totalPrice = text2 * searchResults.price;
  
      const requestBody = {
        portfolioId: portfolioId,
        text2: text2,
        totalPrice: totalPrice,
      };
  
      const response = await axios.post('http://115.85.183.174:8080/api/holdingstock/create', requestBody);
  
      // POST 요청 성공 후의 처리
  
    } catch (error) {
      // POST 요청 실패 또는 에러 처리
      console.log(portfolioId);
      console.log(text2);
      console.error(error);
    }
  };
  
  const BuyButton = ({ portfolioId, text1, text2, searchResults }) => {
    const handleClick = () => {
      handleBuyButtonClick(portfolioId, text1, text2, searchResults);
    };
  
    return (
      <button
        style={{
          borderRadius: '20px',
          backgroundColor: '#00A968',
          border: 'none',
          textAlign: 'center',
          display: 'block',
          margin: '0 auto',
          width: '250px',
          height: '40px',
          color: 'white',
          marginTop: '18px',
        }}
        onClick={handleClick}
      >
        매수하기
      </button>
    );
  };

  function Mainbody1({ searchResults }) {
    const [text1, setText1] = useState(0);
    const [text2, setText2] = useState(0);
    searchResults.price = '7000';
    const handleChange1 = (event) => {
      let inputValue = event.target.value;
      inputValue = inputValue.replace(/[^0-9]/g, '');
  
      if (inputValue.length === 0) {
        setText1('0'); // 값이 비어있을 경우 '0'으로 설정
      } else if (inputValue.length === 1 && inputValue !== '0') {
        setText1(inputValue); // 값이 0으로 시작하지 않으면 그대로 설정
      } else if (inputValue.length > 1) {
        setText1(inputValue.replace(/^0+/, '')); // 값이 0으로 시작할 경우 0 제거
      }
  
      // searchResults가 유효한 객체인 경우에만 계산 수행
      if (searchResults && searchResults.price) {
        const parsedInputValue = parseInt(inputValue);
        const price = parseInt(searchResults.price.replace(/[^0-9]/g, ''));
        if (!isNaN(parsedInputValue) && !isNaN(price)) {
          const quantity = Math.floor(parsedInputValue / price);
          setText2(quantity.toString());
        }
      }
    };
  
    const handleChange2 = (event) => {
      let inputValue = event.target.value;
      inputValue = inputValue.replace(/[^0-9]/g, '');
  
      if (inputValue.length === 0) {
        setText2('0'); // 값이 비어있을 경우 '0'으로 설정
      } else if (inputValue.length === 1 && inputValue !== '0') {
        setText2(inputValue); // 값이 0으로 시작하지 않으면 그대로 설정
      } else if (inputValue.length > 1) {
        setText2(inputValue.replace(/^0+/, '')); // 값이 0으로 시작할 경우 0 제거
      }
  
      // searchResults가 유효한 객체인 경우에만 계산 수행
      if (searchResults && searchResults.price) {
        const parsedInputValue = parseInt(inputValue);
        const price = parseInt(searchResults.price.replace(/[^0-9]/g, ''));
        if (!isNaN(parsedInputValue) && !isNaN(price)) {
          const amount = parsedInputValue * price;
          setText1(amount.toString());
        }
      }
    };
  
    const handleRightButtonClick1 = () => {
      setText1((prevText1) => {
        const parsedText1 = parseInt(prevText1);
        const stockPrice = parseInt(searchResults.price);
    
        if (isNaN(parsedText1)) {
          return prevText1;
        }
    
        const result = parsedText1 + stockPrice;
        return String(result);
      });
    
      setText2((prevText2) => {
        const parsedText2 = parseInt(prevText2);
    
        if (isNaN(parsedText2)) {
          return prevText2;
        }
    
        const result = parsedText2 + 1;
        return String(result);
      });
    };
    
    const handleLeftButtonClick1 = () => {
      setText1((prevText1) => {
        const parsedText1 = parseInt(prevText1);
        const stockPrice = parseInt(searchResults.price);
    
        if (isNaN(parsedText1)) {
          return prevText1;
        }
    
        const result = parsedText1 - stockPrice;
        return String(result >= 0 ? result : 0);
      });
    
      setText2((prevText2) => {
        const parsedText2 = parseInt(prevText2);
    
        if (isNaN(parsedText2)) {
          return prevText2;
        }
    
        const result = parsedText2 - 1;
        return String(result >= 0 ? result : 0);
      });
    };
    
    const handleRightButtonClick2 = () => {
      setText1((prevText1) => {
        const parsedText1 = parseInt(prevText1);
        const stockPrice = parseInt(searchResults.price);
    
        if (isNaN(parsedText1)) {
          return prevText1;
        }
    
        const result = parsedText1 + stockPrice;
        return String(result);
      });
    
      setText2((prevText2) => {
        const parsedText2 = parseInt(prevText2);
    
        if (isNaN(parsedText2)) {
          return prevText2;
        }
    
        const result = parsedText2 + 1;
        return String(result);
      });
    };
    
    const handleLeftButtonClick2 = () => {
      setText1((prevText1) => {
        const parsedText1 = parseInt(prevText1);
        const stockPrice = parseInt(searchResults.price);
    
        if (isNaN(parsedText1)) {
          return prevText1;
        }
    
        const result = parsedText1 - stockPrice;
        return String(result >= 0 ? result : 0);
      });
    
      setText2((prevText2) => {
        const parsedText2 = parseInt(prevText2);
    
        if (isNaN(parsedText2)) {
          return prevText2;
        }
    
        const result = parsedText2 - 1;
        return String(result >= 0 ? result : 0);
      });
    };
    const portfolioId = 10;
    const handlePercentButtonClick = async (percentage, portfolioId) => {
      try {
        const response = await axios.get('your_api_endpoint', {
          params: {
            percentage: percentage,
            portfolioId: portfolioId,
          },
        });
    
        // 받은 데이터의 값을 텍스트 필드에 적용
        const textField = document.getElementById('textField');
        textField.value = response.data;
    
      } catch (error) {
        // 에러 처리
        console.error(error);
      }
    };

    const PercentButton = ({ percentage, portfolioId }) => {
      const handleClick = () => {
        handlePercentButtonClick(percentage, portfolioId);
      };
    
      return (
        <button className="PercentButton" onClick={handleClick}>
          {percentage}%
        </button>
      );
    };
    
    return (
      <div style={{ marginTop: '2vh', marginBottom: '8vh' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
            <div className="Row1" style={{ marginTop: '1vh' }}>
              <div style={{ display: 'flex' }}>
                <img
                  src={phone}
                  alt="Apple Phone"
                  style={{
                    width: '40px',
                    height: '40px',
                    marginTop: '5px',
                    marginBottom: '5px',
                    marginLeft: '3vw',
                  }}
                />
                <div style={{ marginLeft: '1vw', marginTop: '1.4vh' }}>
                  {searchResults.name}
                </div>
                <div
                  style={{
                    marginLeft: '2.5vw',
                    marginTop: '1.9vh',
                    color: '#F6465D',
                  }}
                >
                  {searchResults.price}
                </div>
                <div
                  style={{
                    marginLeft: '2.5vw',
                    marginTop: '1.9vh',
                    color: '#F6465D',
                  }}
                >
                  {searchResults.change}
                </div>
                <div
                  style={{
                    marginLeft: '2vw',
                    marginTop: '1.9vh',
                    color: '#F6465D',
                  }}
                >
                  {searchResults.volume}
                </div>
                <div style={{ marginLeft: '2.5vw', marginTop: '1.4vh' }}>
                  거래량
                </div>
                <div style={{ marginLeft: '2vw', marginTop: '1.9vh' }}>
                  {searchResults.tradeVolume}
                </div>
                <div style={{ marginLeft: '2.5vw', marginTop: '1.4vh' }}>
                  거래대금
                </div>
                <div style={{ marginLeft: '2vw', marginTop: '1.4vh' }}>
                  {searchResults.tradeAmount}
                </div>
              </div>
            </div>
            <div className="Row2">
              <StockChart />
            </div>
            <div className="Row3">
              <CashChart />
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              marginTop: '1vh',
            }}
          >
            <div className="Row4">
              <Toggle />
            </div>
            <div className="Row5">
            <div style={{ marginTop: '4vh' }}>
              <div style={{ marginLeft: '0.5vw' }}>
                <TextFieldWithButtons
                  value={text1}
                  onChange={handleChange1}
                  onLeftButtonClick={() => handleLeftButtonClick1('text1')}
                  onRightButtonClick={() => handleRightButtonClick1('text1')}
                  postfix="원" // 숫자 다음에 '원'이 붙도록 설정
                />
              </div>
              <div style={{ marginLeft: '0.5vw', marginTop: '1vh' }}>
                <TextFieldWithButtons
                  value={text2}
                  onChange={handleChange2}
                  onLeftButtonClick={() => handleLeftButtonClick2('text2')}
                  onRightButtonClick={() => handleRightButtonClick2('text2')}
                  postfix="주" // 숫자 다음에 '주'가 붙도록 설정
                />
              </div>
            </div>
              <div
                style={{
                  marginLeft: '1vw',
                  marginRight: '1vw',
                  marginTop: '1vh',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <PercentButton percentage={10} portfolioId={portfolioId} />
                <PercentButton percentage={25} portfolioId={portfolioId} />
                <PercentButton percentage={50} portfolioId={portfolioId} />
                <PercentButton percentage={100} portfolioId={portfolioId} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin: '0 20px',
                  marginTop: '10px',
                  fontSize: '12px',
                }}
              >
                <div>주문단가</div>
                <div>{searchResults.price}원</div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin: '0 20px',
                  marginTop: '10px',
                  fontSize: '12px',
                }}
              >
                <div>주문총액</div>
                <div>{parseInt(parseInt(text1)/parseInt(searchResults.price)) *parseInt(searchResults.price) }원</div>
              </div>
              <BuyButton portfolioId={portfolioId} text2={text2} searchResults={searchResults} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  

function Mainbody2() {
    const [data, setData] = useState([10000000, 10000000, 0.00, 0, 0]);
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      const maxScrollPosition = document.documentElement.scrollHeight - window.innerHeight;
      if (currentPosition > maxScrollPosition * 0.8) {
        // 스크롤이 일정 위치에 도달하면 추가 데이터를 요청하는 함수 호출
        fetchData();
      }
      setScrollPosition(currentPosition);
    };
    
    const fetchPortfolioData = async () => {
    try {
      const response = await axios.get('http://115.85.183.174:8080/api/portfolio/{portfolioId}'); // Replace {portfolioId} with the actual portfolio ID
      const portfolioData = response.data;
      const updatedData = [
        portfolioData.evaluatedAsset,
        portfolioData.cash,
        portfolioData.cumulativeRate,
        portfolioData.evaluatedProfit,
        portfolioData.stockEvaluation,
      ];
      setData(updatedData);
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
    }
  };

    const fetchData = async () => {
      // 서버에 데이터 요청
      // 예를 들어, fetch나 axios 등을 사용하여 서버로부터 데이터를 받아옵니다.
      // 받아온 데이터를 기존 데이터에 추가하여 업데이트합니다.
      // setData(updatedData);
    };
  
    return (
      <div style={{ marginTop: '15vh', display: 'flex' }}>
        <div>
        <div className="Row6" style={{marginBottom : '35px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop : '30px', marginLeft : '35px'}}>
            <div style={{ marginRight: '88px', marginTop : '25px', fontSize : '10px'}}>총 평가자산</div>
            <div style={{ marginRight: '103px', marginTop : '25px', fontSize : '10px' }}>보유현금</div>
            <div style={{ marginRight: '79px', marginTop : '25px', fontSize : '10px' }}>누적수익률</div>
            <div style={{ marginRight: '40px', marginTop : '25px', fontSize : '10px' }}>평가수익금</div>
            <div style={{marginLeft: '25px', marginTop : '25px', fontSize : '10px'}}>주식평가금</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop : '14px', marginLeft : '35px'}}> 
            <div style={{color: '#00A968', fontSize : '18px', marginRight: '40px', fontWeight : "bold" }}>{data[0]}원</div>
            <div style={{fontSize : '18px', marginRight: '40px' }}>{data[1]}원</div>
            <div style={{fontSize : '18px', marginLeft: '10px', marginRight: '40px' }}>{data[2]}%</div>
            <div style={{fontSize : '18px', marginLeft: '65px',  marginRight: '40px' }}>{data[3]}</div>
            <div style={{fontSize : '18px', marginLeft: '65px'}}>{data[4] }</div>
          </div>
        </div>
          
          
        <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
        <div className="SlideRow" style={{ borderRadius: '20px 20px 0 0', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', borderBottom: '1px solid #DBDBDB', borderLeft: 'none', borderRight: 'none', borderTop: 'none' }}>
          <div style={{ borderRadius: '20px 20px 0 0' }}>
            <div style={{ fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginLeft: '150px', marginTop: '10px' }}>
              <div style={{ marginRight: '45px' }}>평가손익</div>
              <div style={{ marginRight: '45px' }}>잔고수량</div>
              <div style={{ marginRight: '45px' }}>평균매입가</div>
              <div style={{ marginRight: '57px' }}>매도가</div>
              <div>손익분기매입가</div>
            </div>
            <div>
              <div style={{ marginTop: "5px", marginLeft: "42px", fontSize: "11px", fontWeight : 'bold'}}>종목</div>
            </div>
            <div style={{ fontSize: "12px", display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginLeft: '150px', marginTop: '3px' }}>
              <div style={{ marginRight: '58px' }}>수익률</div>
              <div style={{ marginRight: '45px' }}>평가금액</div>
              <div style={{ marginRight: '68px' }}>현재가</div>
              <div style={{ marginRight: '45px' }}>매도손익</div>
              <div style={{ marginRight: '45px' }}>본전가</div>
            </div>
          </div>
          </div>
          {/* 데이터를 기반으로 화면에 표시 */}
          {data.map((item, index) => (
            <div className="SlideRow" key={index}>
              <div>{item.종목}</div>
              <div>{item.평가손익}</div>
              <div>{item.잔고수량}</div>
              <div>{item.평균매입가}</div>
              <div>{item.매도가}</div>
              <div>{item.손익분기매입가}</div>
              <br />
              <div>{item.수익률}</div>
              <div>{item.평가금액}</div>
              <div>{item.현재가}</div>
              <div>{item.매도손익}</div>
              <div>{item.본전가}</div>
            </div>
          ))}
          <div className="SlideRow" style={{ borderRadius: '0 0 20px 20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', border : 'none' }}>
            {/* 마지막 row 내용 */}
          </div>
          <div style={{marginTop : '50px'}}></div>
        </div>
        </div>
        <div className="PieChart">
            <PieChart />
        </div>
      </div>
    );
  }

  function CreatePageBody() {
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearchResults = (results) => {
      console.log('Search results:', results);
      setSearchResults(results);
    };
  
    const handleSearch = (stockName) => {
      axios.get(`http://115.85.183.174:8080/api/stockInfo/${stockName}`)
        .then(response => {
          handleSearchResults(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
        });
    };
  
    return (
      <div>
        <div style={{ border: '1px solid white', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', marginTop: '20vh', marginLeft: '3vw', marginRight: '3vw' }}>
          <div style={{ display: 'flex', marginTop: '15vh' }}>
            <div className="ButtonContainer">
              <ButtonGroup />
            </div>
            <div className="SearchContainer" style={{ marginLeft: '5vw' }}>
              <Search onSearchResults={handleSearchResults} />
            </div>
          </div>
          <div>
            <Mainbody1 searchResults={searchResults} /> {/* 검색 결과를 Mainbody1 컴포넌트로 전달합니다. */}
          </div>
        </div>
        <div>
          <div style={{ border: '1px solid white', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', marginTop: '20vh', marginLeft: '3vw', marginRight: '3vw' }}>
            <Mainbody2 />
          </div>
        </div>
      </div>
    );
  }

function CreateContainer() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <CreatePageHead />
      <CreatePageBody />
      <div style={{height : '50px'}}>
        
      </div>
    </div>
  );
}

export default CreateContainer;