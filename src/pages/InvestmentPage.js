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
`;

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
        <input type="text" placeholder="종목 검색" value={searchQuery} onChange={handleInputChange} />
        <button onClick={handleSearch}>
          <FiSearch />
        </button>
      </div>
    </div>
  );
}


function StockChart() {
    const [series, setSeries] = useState([
      {
        data: [
            {
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
              },
              {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11]
              },
              {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
              },
              {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24]
              },
              {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47]
              },
              {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
              },
              {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02]
              },
              {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02]
              },
              {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01]
              },
              {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
              },
              {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
              },
              {
                x: new Date(1538798400000),
                y: [6608.91, 6618.99, 6608.01, 6612]
              },
              {
                x: new Date(1538800200000),
                y: [6612, 6615.13, 6605.09, 6612]
              },
              {
                x: new Date(1538802000000),
                y: [6612, 6624.12, 6608.43, 6622.95]
              },
              {
                x: new Date(1538803800000),
                y: [6623.91, 6623.91, 6615, 6615.67]
              },
              {
                x: new Date(1538805600000),
                y: [6618.69, 6618.74, 6610, 6610.4]
              },
              {
                x: new Date(1538807400000),
                y: [6611, 6622.78, 6610.4, 6614.9]
              },
              {
                x: new Date(1538809200000),
                y: [6614.9, 6626.2, 6613.33, 6623.45]
              },
              {
                x: new Date(1538811000000),
                y: [6623.48, 6627, 6618.38, 6620.35]
              },
              {
                x: new Date(1538812800000),
                y: [6619.43, 6620.35, 6610.05, 6615.53]
              },
              {
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19]
              },
              {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620]
              },
              {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620]
              },
              {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
              },
              {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58]
              },
              {
                x: new Date(1538823600000),
                y: [6619, 6625.97, 6595.27, 6598.86]
              },
              {
                x: new Date(1538825400000),
                y: [6598.86, 6598.88, 6570, 6587.16]
              },
              {
                x: new Date(1538827200000),
                y: [6588.86, 6600, 6580, 6593.4]
              },
              {
                x: new Date(1538829000000),
                y: [6593.99, 6598.89, 6585, 6587.81]
              },
              {
                x: new Date(1538830800000),
                y: [6587.81, 6592.73, 6567.14, 6578]
              },
              {
                x: new Date(1538832600000),
                y: [6578.35, 6581.72, 6567.39, 6579]
              },
              {
                x: new Date(1538834400000),
                y: [6579.38, 6580.92, 6566.77, 6575.96]
              },
              {
                x: new Date(1538836200000),
                y: [6575.96, 6589, 6571.77, 6588.92]
              },
              {
                x: new Date(1538838000000),
                y: [6588.92, 6594, 6577.55, 6589.22]
              },
              {
                x: new Date(1538839800000),
                y: [6589.3, 6598.89, 6589.1, 6596.08]
              },
              {
                x: new Date(1538841600000),
                y: [6597.5, 6600, 6588.39, 6596.25]
              },
              {
                x: new Date(1538843400000),
                y: [6598.03, 6600, 6588.73, 6595.97]
              },
              {
                x: new Date(1538845200000),
                y: [6595.97, 6602.01, 6588.17, 6602]
              },
              {
                x: new Date(1538847000000),
                y: [6602, 6607, 6596.51, 6599.95]
              },
              {
                x: new Date(1538848800000),
                y: [6600.63, 6601.21, 6590.39, 6591.02]
              },
              {
                x: new Date(1538850600000),
                y: [6591.02, 6603.08, 6591, 6591]
              },
              {
                x: new Date(1538852400000),
                y: [6591, 6601.32, 6585, 6592]
              },
              {
                x: new Date(1538854200000),
                y: [6593.13, 6596.01, 6590, 6593.34]
              },
              {
                x: new Date(1538856000000),
                y: [6593.34, 6604.76, 6582.63, 6593.86]
              },
              {
                x: new Date(1538857800000),
                y: [6593.86, 6604.28, 6586.57, 6600.01]
              },
              {
                x: new Date(1538859600000),
                y: [6601.81, 6603.21, 6592.78, 6596.25]
              },
              {
                x: new Date(1538861400000),
                y: [6596.25, 6604.2, 6590, 6602.99]
              },
              {
                x: new Date(1538863200000),
                y: [6602.99, 6606, 6584.99, 6587.81]
              },
              {
                x: new Date(1538865000000),
                y: [6587.81, 6595, 6583.27, 6591.96]
              },
              {
                x: new Date(1538866800000),
                y: [6591.97, 6596.07, 6585, 6588.39]
              },
              {
                x: new Date(1538868600000),
                y: [6587.6, 6598.21, 6587.6, 6594.27]
              },
              {
                x: new Date(1538870400000),
                y: [6596.44, 6601, 6590, 6596.55]
              },
              {
                x: new Date(1538872200000),
                y: [6598.91, 6605, 6596.61, 6600.02]
              },
              {
                x: new Date(1538874000000),
                y: [6600.55, 6605, 6589.14, 6593.01]
              },
              {
                x: new Date(1538875800000),
                y: [6593.15, 6605, 6592, 6603.06]
              },
              {
                x: new Date(1538877600000),
                y: [6603.07, 6604.5, 6599.09, 6603.89]
              },
              {
                x: new Date(1538879400000),
                y: [6604.44, 6604.44, 6600, 6603.5]
              },
              {
                x: new Date(1538881200000),
                y: [6603.5, 6603.99, 6597.5, 6603.86]
              },
              {
                x: new Date(1538883000000),
                y: [6603.85, 6605, 6600, 6604.07]
              },
              {
                x: new Date(1538884800000),
                y: [6604.98, 6606, 6604.07, 6606]
              },
        ],
      },
    ]);
  
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
  

function Toggle() {
    return (
    <div>
        <select aria-label="Sorting Options" style={{backgroundColor : 'white', borderColor: 'white', margin: '22px', color : '#606060', font : 'bold'}}>
        <option value="first">유의 포트폴리오_1</option>
        <option value="second">유의 포트폴리오_2</option>
        <option value="third">유의 포트폴리오_3</option>
        </select>
    </div>
    );

}
function TextFieldWithButtons({ value, onChange, onLeftButtonClick, onRightButtonClick }) {
    return (
      <div className="text-field-with-buttons">
        <button onClick={onLeftButtonClick}>-</button>
        <input type="text" value={value} onChange={onChange} />
        <button onClick={onRightButtonClick}>+</button>
      </div>
    );
  }

function Mainbody1(){

    const [text1, setText1] = useState(0);
    const [text2, setText2] = useState(0);
    

    const handleChange1 = (event) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거
    setText1(inputValue);
    };

    const handleChange2 = (event) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거
    setText2(inputValue);
    };


    const handleLeftButtonClick = (field) => {
        if (field === 'text1') {
          setText1((prevText1) => {
            const parsedText1 = parseInt(prevText1);
            return isNaN(parsedText1) ? prevText1 : String(parsedText1 - 1);
          });
        } else if (field === 'text2') {
          setText2((prevText2) => {
            const parsedText2 = parseInt(prevText2);
            return isNaN(parsedText2) ? prevText2 : String(parsedText2 - 1);
          });
        }
      };
      
      const handleRightButtonClick = (field) => {
        if (field === 'text1') {
          setText1((prevText1) => {
            const parsedText1 = parseInt(prevText1);
            return isNaN(parsedText1) ? prevText1 : String(parsedText1 + 1);
          });
        } else if (field === 'text2') {
          setText2((prevText2) => {
            const parsedText2 = parseInt(prevText2);
            return isNaN(parsedText2) ? prevText2 : String(parsedText2 + 1);
          });
        }
      };


    return (
        <div style = {{marginTop: '15vh', display : 'flex'}}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
                <div className="Row1">  
                    <div style={{display :'flex'}}>
                        <img src={phone} alt="Apple Phone" style={{ width: '40px', height: '40px', marginTop: '5px', marginBottom: '5px', marginLeft: '3vw'}} />
                        <div style={{marginLeft : '1vw', marginTop : '1.4vh'}}>애플</div>
                        <div style={{marginLeft : '2.5vw', marginTop : '1.9vh', color : '#F6465D'}}>$158.88</div>
                        <div style={{marginLeft : '2.5vw', marginTop : '1.9vh', color : '#F6465D'}}>+0.67%</div>
                        <div style={{marginLeft : '2vw', marginTop : '1.9vh', color : '#F6465D'}}>1.06</div>
                        <div style={{marginLeft : '2.5vw', marginTop : '1.4vh'}}>거래량</div>
                        <div style={{marginLeft : '2vw', marginTop : '1.9vh'}}>68,483,589</div>
                        <div style={{marginLeft : '2.5vw', marginTop : '1.4vh'}}>거래대금</div>
                        <div style={{marginLeft : '2vw', marginTop : '1.4vh'}}>$109억 2,896만</div>
                    </div> 
                </div>
                <div className="Row2">
                    <StockChart />
                </div>
                <div className="Row3">
                <CashChart />
                </div>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr' }}>
                <div className="Row4"><Toggle /></div>
                <div className="Row5">
                    <TextFieldWithButtons
                        value={text1}
                        onChange={handleChange1}
                        onLeftButtonClick={() => handleLeftButtonClick('text1')}
                        onRightButtonClick={() => handleRightButtonClick('text1')}
                    />
                    <TextFieldWithButtons
                        value={text2}
                        onChange={handleChange2}
                        onLeftButtonClick={() => handleLeftButtonClick('text2')}
                        onRightButtonClick={() => handleRightButtonClick('text2')}
                    />
                    <StyledButton>
                    10%
                    </StyledButton>
                    <StyledButton>
                    25%
                    </StyledButton>
                    <StyledButton>
                    50%
                    </StyledButton>
                    <StyledButton>
                    100%
                    </StyledButton>
                    <div>
                        주문단가 0원
                    </div>
                    <div>
                        주문총액 0원
                    </div>
                    <StyledButton>
                    매수하기
                    </StyledButton>
                </div>
                
            </div>
        </div>
    );

}

function CreatePageBody() {
    return (
        <div>
            <div style={{ display: 'flex', marginTop: '15vh' }}>
                <div className = "ButtonContainer" >
                    <ButtonGroup/>
                </div>
                <div className = "SearchContainer">
                    <Search style={{flex: 1}} />
                </div>
            </div>
            <div>
                <Mainbody1 />
            </div>
        </div>
      );
}

function CreateContainer() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <CreatePageHead />
      <CreatePageBody />
    </div>
  );
}

export default CreateContainer;