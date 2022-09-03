import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = () => {
  const [cardcontent, setCardContent] = useState('');

  const fetchCard = async () => {
    const { data } = await axios.get(`http://localhost:3001/post/1`);
    setCardContent(data);
    console.log(data);
  };

  const deleteHandler = () => {};

  useEffect(() => {
    fetchCard();
  }, []);

  return (
    <div className="card">
      <div className="flex justify-between">
        <p className="py-2">{cardcontent.nickName}</p>
        <div>
          <button className="p-2">수정</button>
          <button onClick={deleteHandler} className="py-2">
            삭제
          </button>
        </div>
      </div>
      <img
        src={cardcontent.imgUrl}
        alt="닉네임이 등록한 이미지"
        className="w-[25rem]"
      />
      <p className="font-semibold py-2">{cardcontent.title}</p>
      <p className="font-normal pb-4 w-[25rem]">{cardcontent.content}</p>
    </div>
  );
};

export default Card;
