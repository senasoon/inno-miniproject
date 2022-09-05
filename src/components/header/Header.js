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
  const moveAddPost = () => {
    navigate('/Post');
  };

  return (
    <header className="h-14 w-screen bg-brown3 flex flex-row justify-between px-10 items-center">
      <button onClick={moveMain}>로고</button>
      <div>
        {token() ? (
          <>
            <span className="mr-4 text-xs">@@@님의 일상을 등록해보세요!</span>
            <button
              onClick={moveAddPost}
              className="mr-4 text-xs hover:text-white"
            >
              글 작성하기
            </button>
          </>
        ) : (
          <button
            onClick={moveSignup}
            className="mr-4 text-xs hover:text-white"
          >
            회원가입
          </button>
        )}

        <button
          onClick={loginButtonHandler}
          className="text-xs hover:text-white"
        >
          {token() !== null ? '로그아웃' : '로그인'}
        </button>
      </div>
    </header>
  );
};

export default Header;
