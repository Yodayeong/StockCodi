import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Investment from './pages/InvestmentPage';
import Study from './pages/Study';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      { /*Routers*/ }
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />}></Route>
          <Route path={"/signup"} element={<Signup />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/study"} element={<Study />}></Route>
          <Route path={"/investment"} element={<Investment />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

