import React, {useState, useEffect} from 'react';
import '../styles/Account.css'
import google from '../img/google.png'
import naver from '../img/naver.png'
import kakao from '../img/kakao.png'
import thumbsup from '../img/thumbsup.png'
import logo from '../img/logo-white.png'
import thumbs from '../img/thumbs.png'
import lines from '../img/lines.png'

function Login() {
    return (
        <div class="account-background">
            {/* leftbox */}
            <div class="account-box left-box">
                <img class="logo-img" src={logo}></img>
                <div class="img-container">
                    <img class="thumbs-img" src={thumbs}></img>
                    {/* <img class="lines-img" src={lines}></img> */}
                </div>
            </div>
            {/* rightbox */}
            <div class="account-box account-input-box">
                {/* login text */}
                <div class="padding-bottom">
                    <h2 class="center">로그인</h2>
                    <p class="sub-text">로그인 후 서비스를 이용해보세요!</p>
                </div>
                {/* social login */}
                <div class="social-login-box">
                    <div class="social-login">
                        <img class="social-login-img" src={google}></img>
                        <p>구글 계정으로 로그인</p>
                    </div>
                    <div class="social-login">
                        <img class="social-login-img" src={naver}></img>
                        <p>네이버 계정으로 로그인</p>
                    </div>
                    <div class="social-login">
                        <img class="social-login-img" src={kakao}></img>
                        <p>카카오 계정으로 로그인</p>
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
                    <form class="input-box">
                        <label class="input-text" for="email">이메일 주소</label>
                        <input class="input" type="text" id="email" name="email"></input>
                        <label class="input-text" for="password">비밀번호</label>
                        <input class="input" type="text" id="password" name="password"></input>
                        <button class="submit-button" type="submit">로그인</button>
                    </form>
                </div>
                {/* signup */}
                <div class="bottom-box">
                    <p class="sub-text margin-none">아직 계정이 없으신가요?</p>
                    <a class="link-text" href="#">회원가입</a>
                </div>
            </div>
        </div>
    );
}

export default Login;