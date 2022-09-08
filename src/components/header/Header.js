import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import banner from './bannner.png';

const Header = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const cookie = cookies.get('token');
  const id = localStorage.getItem('id');
  const loginButtonHandler = () => {
    if (cookie != null) {
      cookies.remove('token');
      localStorage.removeItem('id');
      localStorage.removeItem('token');
      localStorage.removeItem('freshToken');
      alert(id + '님이 로그아웃 되셨습니다 ');
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
    <header className="h-16 w-screen bg-brown3 flex flex-row justify-between px-2 items-center">
      <button onClick={moveMain}>
        <img className="h-16 pl-4" src={banner} alt="로고"></img>
      </button>
      <div>
        {cookie != null ? (
          <>
            <span className="mr-4 font-sans font-medium">
              {id}님의 일상을 등록해보세요!
            </span>
            <button
              onClick={moveAddPost}
              className="mr-4 font-sans font-medium hover:text-white"
            >
              글 작성하기
            </button>
          </>
        ) : (
          <button
            onClick={moveSignup}
            className="mr-4 font-sans font-medium hover:text-white"
          >
            회원가입
          </button>
        )}

        <button
          onClick={loginButtonHandler}
          className="mr-8 mr-6 font-sans font-medium hover:text-white"
        >
          {cookie != null ? '로그아웃' : '로그인'}
        </button>
      </div>
    </header>
  );
};

export default Header;
