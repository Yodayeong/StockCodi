import React, {useState, useEffect} from 'react';
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
    const [isClicked, setIsClicked] = useState(false);
    
  
    
    return (
        
        <div class="account-background flex-row">
            {/* leftbox */}
            <div class="account-box left-box">
                <img class="logo-img" src={logo}></img>
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
                {/* login */}
                <div class="bottom-box flex-row">
                    <p class="sub-text margin-none">이미 계정이 있으신가요?</p>
                    <a class="link-text" href="">로그인</a>
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
                    <div className='box_wrap' onClick={()=>{setIsClicked(cur=>!cur)}}>
                    <div class="flex-row">
                        <div class="flex-col interest-box">
                            <img class="interest-img" src={thunder}></img>
                            <p class="interest-text">에너지</p>
                        </div>
                        <div class="flex-col interest-box">
                            <img class="interest-img" src={bottle}></img>
                            <p class="interest-text">소재</p>
                        </div>
                        <div class="flex-col interest-box">
                            <img class="interest-img" src={bottle}></img>
                            <p class="interest-text">산업재</p>
                        </div>
                        <div class="flex-col interest-box">
                            <img class="interest-img" src={bottle}></img>
                            <p class="interest-text">경기소비재</p>
                        </div>
                        <div class="flex-col interest-box">
                            <img class="interest-img" src={bottle}></img>
                            <p class="interest-text">필수소비재</p>
                        </div>
                    </div>
                    <div class="flex-row">
                        <div class="flex-col interest-box">
                            <img class="interest-img" src={medical}></img>
                            <p class="interest-text">의료</p>
                        </div>
                        <div class="flex-col interest-box">
                            <img class="interest-img" src={money}></img>
                            <p class="interest-text">금융</p>
                        </div>
                        <div class="flex-col interest-box">
                            <img class="interest-img" src={laptop}></img>
                            <p class="interest-text">IT</p>
                        </div>
                        <div class="flex-col interest-box">
                            <img class="interest-img" src={chat}></img>
                            <p class="interest-text">통신서비스</p>
                        </div>
                        <div class="flex-col interest-box">
                            <img class="interest-img" src={utility}></img>
                            <p class="interest-text">유틸리티</p>
                        </div>
                    </div>
                    <div class="flex-row">
                        <div class="flex-col interest-box">
                            <img class="interest-img" src={utility}></img>
                            <p class="interest-text">종목</p>
                        </div>
                        <div class="flex-col interest-box">
                            <img class="interest-img" src={utility}></img>
                            <p class="interest-text">종목</p>
                        </div>
                        <div class="flex-col interest-box">
                            <img class="interest-img" src={utility}></img>
                            <p class="interest-text">종목</p>
                        </div>
                        <div class="flex-col interest-box">
                            <img class="interest-img" src={utility}></img>
                            <p class="interest-text">종목</p>
                        </div>
                        <div class="flex-col interest-box">
                            <img class="interest-img" src={utility}></img>
                            <p class="interest-text">종목</p>
                        </div>
                    </div>
                    </div>
                    {/* submit button */}
                    <button class="submit-button next">다음</button>
                </div>
            </div>
        </div>
        
    );
}


// const Elem = ()=>{
//     const [row1,setRow1] = useState(['에너지','소재','산업재','경기소비재','필수소비재'])
//     const [row2,setRow2] = useState(['의료','금융','IT','통신서비스','유틸리티'])
//     const [row3,setRow3] = useState(['종목','종목','종목','종목','종목'])
    
    
    
    
//     return (

//     <div>
//     {row1.map((a,b)=>{
//         return 
//         <>
//         <image  style ={{backgroundColor: "red"}}src={a}/>
//             {a}
//         </>
            
//     })}

//     {row2.map((a,b)=>{

//     })}

//     {row3.map((a,b)=>{

//     })}

//     </div>
//     )
    
// }
export default Signup;