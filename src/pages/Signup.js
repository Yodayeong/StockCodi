import React, {useState, useEffect} from 'react';
import '../styles/Account.css'
import google from '../img/google.png'
import naver from '../img/naver.png'
import kakao from '../img/kakao.png'
import logo from '../img/logo-white.png'
import thumbs from '../img/thumbs.png'
import rightArrow from '../img/right-arrow.png'

function Signup() {
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
                {/* login text */}
                <div class="padding-bottom">
                    <h2 class="center"><span class="stocodi-color">Stocodi</span>에 오신 걸 환영해요!</h2>
                </div>
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
                {/* input */}
                <div class="padding-top padding-bottom">
                    <form class="input-box">
                        <label class="input-text" for="name">이름</label>
                        <input class="input" type="text" id="name" name="name"></input>
                        <label class="input-text" for="email">이메일 주소</label>
                        <input class="input" type="text" id="email" name="email"></input>
                        <label class="input-text" for="password">비밀번호</label>
                        <input class="input" type="text" id="password" name="password"></input>
                        <button class="submit-button flex-row" type="submit"><span>다음으로</span><img class="arrow-img" src={rightArrow}></img></button>
                    </form>
                </div>
                {/* login */}
                <div class="bottom-box">
                    <p class="sub-text margin-none">이미 계정이 있으신가요?</p>
                    <a class="link-text" href="">로그인</a>
                </div>
            </div>
        </div>
    );
}

export default Signup;