import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/Account.css'
import google from '../img/google.png'
import naver from '../img/naver.png'
import kakao from '../img/kakao.png'
import logo from '../img/logo-white.png'
import thumbs from '../img/thumbs.png'
import rightArrow from '../img/right-arrow.png'
import medical from '../img/medical.png'
import money from '../img/money.png'
import laptop from '../img/laptop.png'
import chat from '../img/chat.png'
import utility from '../img/utility.png'
import thunder from '../img/thunder.png'
import bottle from '../img/bottle.png'

// 다음 버튼을 누를때 마다, 해당 값들을 세팅해주고, 그부분은 사라지고 새로운 부분을 띄우면 된다.

function Signup() {
    // 회원가입
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [phone, setPhone] = useState("");
    const [birth, setBirth] = useState("");
    async function signup1() {
        console.log(name, email, password);

        var signupBox = document.getElementById("signup-box");
        var inputBox = document.getElementById("input-box");
 
        signupBox.style.display = "none";
        inputBox.style.display = "block";
    }
    async function signup2() {
        console.log(nickname, phone, birth);

        var rightBox = document.getElementById("right-box");
        var inputBox = document.getElementById("input-box2");

        rightBox.style.display = "none";
        inputBox.style.display = "block";
    }

    // 관심종목
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);
    const [box5, setBox5] = useState(false);
    const [box6, setBox6] = useState(false);
    const [box7, setBox7] = useState(false);
    const [box8, setBox8] = useState(false);
    const [box9, setBox9] = useState(false);
    const [box10, setBox10] = useState(false);
    const [box11, setBox11] = useState(false);
    const [box12, setBox12] = useState(false);
    const [box13, setBox13] = useState(false);
    const [box14, setBox14] = useState(false);
    const [box15, setBox15] = useState(false);

    const handleClick1 = () => {
        setBox1(!box1);
    };
    const handleClick2 = () => {
        setBox2(!box2);
    };
    const handleClick3 = () => {
        setBox3(!box3);
    };
    const handleClick4 = () => {
        setBox4(!box4);
    };
    const handleClick5 = () => {
        setBox5(!box5);
    };
    const handleClick6 = () => {
        setBox6(!box6);
    };
    const handleClick7 = () => {
        setBox7(!box7);
    };
    const handleClick8 = () => {
        setBox8(!box8);
    };
    const handleClick9 = () => {
        setBox9(!box9);
    };
    const handleClick10 = () => {
        setBox10(!box10);
    };
    const handleClick11 = () => {
        setBox11(!box11);
    };
    const handleClick12 = () => {
        setBox12(!box12);
    };
    const handleClick13 = () => {
        setBox13(!box13);
    };
    const handleClick14 = () => {
        setBox14(!box14);
    };
    const handleClick15 = () => {
        setBox15(!box15);
    };
    
    async function interest() {
        var array = new Array();
        if(box1) {
            array.push(1);
        }
        if(box2) {
            array.push(2);
        }
        if(box3) {
            array.push(3);
        }
        if(box4) {
            array.push(4);
        }
        if(box5) {
            array.push(5);
        }
        if(box6) {
            array.push(6);
        }
        if(box7) {
            array.push(7);
        }
        if(box8) {
            array.push(8);
        }
        if(box9) {
            array.push(9);
        }
        if(box10) {
            array.push(10);
        }
        if(box11) {
            array.push(11);
        }
        if(box12) {
            array.push(12);
        }
        if(box13) {
            array.push(13);
        }
        if(box14) {
            array.push(14);
        }
        if(box15) {
            array.push(15);
        }
        console.log(array);

        // api 통신
        // let item = {name, email, password, nickname, phone, birth, array};
        // let result = await fetch("http://13.125.105.227:8080/member/signup", {
        //     method: 'POST',
        //     body:JSON.stringify(item),
        //     headers:{
        //         "Content-Type":"application/json",
        //         "Accept":"application/json"
        //     },
        // }).then(res=>{
        //     console.log(res);
        // })
        // result = await result.json();
        // localStorage.setItem("user-info", JSON.stringify(result))

        //로그인
        var inputBox = document.getElementById("input-box2");
        var login = document.getElementById("login");

        inputBox.style.display = "none";
        login.style.display = "block";
    }

    // link
    const movePage = useNavigate();

    function goLogin(){
        movePage('/login');
    }
    function goHome() {
        movePage('/');
    }

    // login
    async function login() {
        console.log(email, password)
        // api 통신
        // let item = {email, password};
        // let result = await fetch("http://13.125.105.227:8080/member/login", {
        //     method: 'POST',
        //     body:JSON.stringify(item),
        //     headers:{
        //         "Content-Type":"application/json",
        //         "Accept":"application/json"
        //     },
        // }).then(res=>{
        //     console.log(res);
        // })
        // result = await result.json();
        // localStorage.setItem("user-info", JSON.stringify(result))
        movePage('/');
    }
    
    return (
        <div class="account-background flex-row">
            {/* leftbox */}
            <div class="account-box left-box">
                <img class="logo-img" src={logo} onClick={goHome}></img>
                <div class="img-container">
                    <img class="thumbs-img" src={thumbs}></img>
                    {/* <img class="lines-img" src={lines}></img> */}
                </div>
            </div>
            {/* rightbox */}
            <div class="account-box account-input-box flex-col">
                <div id="right-box">
                {/* login text */}
                <div class="padding-bottom">
                    <h2 class="center"><span class="stocodi-color">Stocodi</span>에 오신 걸 환영해요!</h2>
                </div>
                <div id="signup-box">
                {/* social login */}
                <div class="social-login-box flex-row">
                    <div class="social-login flex-row">
                        <img class="social-login-img" src={google}></img>
                        <p class="social-text">구글 계정으로 시작</p>
                    </div>
                    <div class="social-login flex-row">
                        <img class="social-login-img" src={naver}></img>
                        <p class="social-text">네이버 계정으로 시작</p>
                    </div>
                    <div class="social-login flex-row">
                        <img class="social-login-img" src={kakao}></img>
                        <p class="social-text">카카오 계정으로 시작</p>
                    </div>
                </div>
                {/* hr */}
                <div class="hr-box">
                    <hr class="hr-style"/>
                    <p class="margin-none padding-left padding-right sub-text">OR</p>
                    <hr class="hr-style"/>
                </div>
                {/* input1 */}
                <div class="padding-top padding-bottom flex-row">
                    <div class="input-box">
                        <label class="input-text">이름</label>
                        <input class="input" type="text" onChange={(e)=>setName(e.target.value)}></input>
                        <label class="input-text">이메일 주소</label>
                        <input class="input" type="text" onChange={(e)=>setEmail(e.target.value)}></input>
                        <label class="input-text">비밀번호</label>
                        <input class="input" type="password" placeholder="8~16자의 영문 대소문자, 숫자, 특수문자만 가능합니다" onChange={(e)=>setPassword(e.target.value)}></input>
                        <button class="submit-button flex-row" onClick={signup1}><span>다음으로</span><img class="arrow-img" src={rightArrow}></img></button>
                    </div>
                </div>
                {/* login */}
                <div class="bottom-box flex-row">
                    <p class="sub-text margin-none">이미 계정이 있으신가요?</p>
                    <a class="link-text" onClick={goLogin}>로그인</a>
                </div>
                </div>
                {/* input2 */}
                <div id="input-box">
                <div class="padding-top padding-bottom">
                    <div class="input-box">
                        <label class="input-text">닉네임</label>
                        <input class="input" type="text" onChange={(e)=>setNickname(e.target.value)}></input>
                        <label class="input-text">휴대폰 번호</label>
                        <input class="input" type="text" placeholder="010-xxxx-xxxx" onChange={(e)=>setPhone(e.target.value)}></input>
                        <label class="input-text">생년월일</label>
                        <input class="input" type="text" placeholder="8자리로 적어주세요" onChange={(e)=>setBirth(e.target.value)}></input>
                        <button class="submit-button flex-row" onClick={signup2}><span>회원가입하기</span></button>
                    </div>
                </div>
                </div>
                </div>
                {/* interest rightbox */}
                <div id="input-box2">
                    {/* interest text */}
                    <div class="padding-bottom">
                        <h2 class="center">관심 종목이 있나요?</h2>
                        <p class="sub-text flex-row">관심 종목을 선택한 후 맞춤화된 서비스를 만나보세요.</p>
                    </div>
                    {/* interest select */}
                    <div class="flex-row">
                        <div className={`interest-box ${box1 ? 'clicked' : ''}`} onClick={handleClick1} class="flex-col interest-box">
                            <img class="interest-img" src={thunder}></img>
                            <p class="interest-text">에너지</p>
                        </div>
                        <div className={`interest-box ${box2 ? 'clicked' : ''}`} onClick={handleClick2} class="flex-col interest-box">
                            <img class="interest-img" src={bottle}></img>
                            <p class="interest-text">소재</p>
                        </div>
                        <div className={`interest-box ${box3 ? 'clicked' : ''}`} onClick={handleClick3} class="flex-col interest-box">
                            <img class="interest-img" src={bottle}></img>
                            <p class="interest-text">산업재</p>
                        </div>
                        <div className={`interest-box ${box4 ? 'clicked' : ''}`} onClick={handleClick4} class="flex-col interest-box">
                            <img class="interest-img" src={bottle}></img>
                            <p class="interest-text">경기소비재</p>
                        </div>
                        <div className={`interest-box ${box5 ? 'clicked' : ''}`} onClick={handleClick5} class="flex-col interest-box">
                            <img class="interest-img" src={bottle}></img>
                            <p class="interest-text">필수소비재</p>
                        </div>
                    </div>
                    <div class="flex-row">
                        <div className={`interest-box ${box6 ? 'clicked' : ''}`} onClick={handleClick6} class="flex-col interest-box">
                            <img class="interest-img" src={medical}></img>
                            <p class="interest-text">의료</p>
                        </div>
                        <div className={`interest-box ${box7 ? 'clicked' : ''}`} onClick={handleClick7} class="flex-col interest-box">
                            <img class="interest-img" src={money}></img>
                            <p class="interest-text">금융</p>
                        </div>
                        <div className={`interest-box ${box8 ? 'clicked' : ''}`} onClick={handleClick8} class="flex-col interest-box">
                            <img class="interest-img" src={laptop}></img>
                            <p class="interest-text">IT</p>
                        </div>
                        <div className={`interest-box ${box9 ? 'clicked' : ''}`} onClick={handleClick9} class="flex-col interest-box">
                            <img class="interest-img" src={chat}></img>
                            <p class="interest-text">통신서비스</p>
                        </div>
                        <div className={`interest-box ${box10 ? 'clicked' : ''}`} onClick={handleClick10} class="flex-col interest-box">
                            <img class="interest-img" src={utility}></img>
                            <p class="interest-text">유틸리티</p>
                        </div>
                    </div>
                    <div class="flex-row">
                        <div className={`interest-box ${box11 ? 'clicked' : ''}`} onClick={handleClick11} class="interest-box">
                            <img class="interest-img" src={utility}></img>
                            <p class="interest-text">종목</p>
                        </div>
                        <div className={`interest-box ${box12 ? 'clicked' : ''}`} onClick={handleClick12} class="interest-box">
                            <img class="interest-img" src={utility}></img>
                            <p class="interest-text">종목</p>
                        </div>
                        <div className={`interest-box ${box13 ? 'clicked' : ''}`} onClick={handleClick13} class="interest-box">
                            <img class="interest-img" src={utility}></img>
                            <p class="interest-text">종목</p>
                        </div>
                        <div className={`interest-box ${box14 ? 'clicked' : ''}`} onClick={handleClick14} class="interest-box">
                            <img class="interest-img" src={utility}></img>
                            <p class="interest-text">종목</p>
                        </div>
                        <div className={`interest-box ${box15 ? 'clicked' : ''}`} onClick={handleClick15} class="interest-box">
                            <img class="interest-img" src={utility}></img>
                            <p class="interest-text">종목</p>
                        </div>
                    </div>
                    {/* submit button */}
                    <button class="submit-button next" onClick={interest}>다음</button>
                </div>
                <div id="login" class="account-background flex-row">
                    {/* rightbox */}
                    <div class="account-box account-input-box flex-col">
                        {/* login text */}
                        <div class="padding-bottom">
                            <h2 class="center">회원가입 완료!</h2>
                            <p class="sub-text">로그인 후 서비스를 이용해보세요!</p>
                        </div>
                        {/* social login */}
                        <div class="social-login-box flex-row">
                            <div class="social-login flex-row">
                                <img class="social-login-img" src={google}></img>
                                <p class="social-text">구글 계정 로그인</p>
                            </div>
                            <div class="social-login flex-row">
                                <img class="social-login-img" src={naver}></img>
                                <p class="social-text">네이버 계정 로그인</p>
                            </div>
                            <div class="social-login flex-row">
                                <img class="social-login-img" src={kakao}></img>
                                <p class="social-text">카카오 계정 로그인</p>
                            </div>
                        </div>
                        {/* hr */}
                        <div class="hr-box">
                            <hr class="hr-style"/>
                            <p class="margin-none padding-left padding-right sub-text">OR</p>
                            <hr class="hr-style"/>
                        </div>
                        {/* input */}
                        <div class="padding-top padding-bottom">
                            <div class="input-box">
                                <label class="input-text">이메일 주소</label>
                                <input class="input" type="text" onChange={(e)=>setEmail(e.target.value)}></input>
                                <label class="input-text">비밀번호</label>
                                <input class="input" type="password" onChange={(e)=>setPassword(e.target.value)}></input>
                                <button class="submit-button" onClick={login}>로그인</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Signup;