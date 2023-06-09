import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/Account.css'
import google from '../img/google.png'
import naver from '../img/naver.png'
import kakao from '../img/kakao.png'
import logo from '../img/logo-white.png'
import thumbs from '../img/thumbs.png'

function Login() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    // link
    const movePage = useNavigate();

    // login
    async function login() {
        console.log(email, pwd)
        // api 통신
        let item = {email, pwd};
        console.log(item, typeof email, typeof pwd);
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

    function goSignup() {
        movePage('/signup');
    }
    function goHome() {
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
                {/* login text */}
                <div class="padding-bottom">
                    <h2 class="center">로그인</h2>
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
                        <input class="input" type="password" onChange={(e)=>setPwd(e.target.value)}></input>
                        <button class="submit-button" onClick={login}>로그인</button>
                    </div>
                </div>
                {/* signup */}
                <div class="bottom-box">
                    <p class="sub-text margin-none">아직 계정이 없으신가요?</p>
                    <a class="link-text" onClick={goSignup}>회원가입</a>
                </div>

            </div>
        </div>
    );
}

export default Login;