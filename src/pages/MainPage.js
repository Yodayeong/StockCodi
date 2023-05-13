import '../styles/MainPage.css';
import phone from '../img/phone.png';
import Group18403 from '../img/Group18403.png'

function Stocodi(){
    return (
        <div className = "Stocodi">
            Stocodi 
        </div>
    )
}

function InvestmentExperiment(){
    return (
        <div className = "InvestmentExperiment">
            투자실험 
        </div>
    )
}
function Study(){
    return (
        <div className = "Study">
            스터디 
        </div>
    )
}
function Community(){
    return (
        <div className = "Community">
            커뮤니티 
        </div>
    )
}

function Login(){
    return (
        <div className = "Login">
            로그인 
        </div>
    )
}
function Signup(){
    return (
        <div className = "Signup">
            회원가입 
        </div>
    )
}
function MainPageHead(){
    return(
        <div className = "header-container">
            <Stocodi />
            <InvestmentExperiment />
            <Study />
            <Community />
            <Login />
            <Signup />
        </div>
    )
}
function MainPageBody(){
    return(
        <div>
            <div style = {{width: '30%'}}>
                <div>
                    <img src={phone} alt="phone" />
                </div>
            </div>
            <div>
                <div style={{width: '50%'}}>
                    <img src={Group18403} alt="group" />
                </div>
            </div>
        </div>
    )
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