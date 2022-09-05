import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useToken } from '../../shared/api';

const Header = () => {
  const token = useToken();
  const cookies = new Cookies();
  const navigate = useNavigate();

  const loginButtonHandler = () => {
    if (token() !== null) {
      cookies.remove('token');
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const moveMain = () => {
    navigate('/');
  };
  const moveSignup = () => {
    navigate('/signup');
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 left-0 bg-brown3 flex flex-row justify-between px-10 items-center">
      <button onClick={moveMain}>로고</button>
      <div>
        <button onClick={loginButtonHandler} className="mr-4 text-xs">
          {token() !== null ? '로그아웃' : '로그인'}
        </button>
        <button onClick={moveSignup} className="text-xs">
          회원가입
        </button>
      </div>
    </header>
  );
};

export default Header;
