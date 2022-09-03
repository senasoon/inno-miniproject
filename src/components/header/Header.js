import React from "react";

const Header = () => {

  return (
    <header className='fixed inset-x-0 top-0 z-50 h-14 left-0 bg-brown3 flex flex-row justify-between px-10 items-center'>
      <div>로고</div>
      <div>
        <button className='mr-4 text-xs'>로그인</button>
        <button className='text-xs'>회원가입</button>
      </div>
    </header>
  );

};

export default Header;
