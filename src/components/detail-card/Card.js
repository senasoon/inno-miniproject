import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <div className="flex justify-between">
        <p className="py-2">닉네임</p>
        <div>
          <button className="p-2">수정</button>
          <button className="py-2">삭제</button>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1530121512448-fd5dd6cc5967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1541&q=80"
        alt="닉네임이 등록한 이미지"
        className="w-[25rem]"
      />
      <p className="font-semibold py-2">바다</p>
      <p className="font-normal pb-4 w-[25rem]">
        여기에 내용이 들어갑니다. 내용이 들어갑니다.
      </p>
    </div>
  );
};

export default Card;
