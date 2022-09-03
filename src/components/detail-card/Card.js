import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Card = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [cardContent, setCardContent] = useState('');

  const fetchCard = async () => {
    const { data } = await axios.get(`http://localhost:3001/post/${param.id}`);
    setCardContent(data);
  };

  const deleteHandler = () => {
    if (
      confirm('삭제된 데이터는 복구되지 않습니다. 게시글을 삭제 하시겠습니까?')
    ) {
      axios.delete(`http://localhost:3001/post/${param.id}`);
    }
    alert('삭제되었습니다. 홈으로 이동합니다.');
    navigate('/');
  };

  useEffect(() => {
    fetchCard();
  }, []);

  return (
    <div className="card">
      <div className="flex justify-between">
        <p className="py-2">{cardContent.nickName}</p>
        <div>
          <button className="p-2">수정</button>
          <button onClick={deleteHandler} className="py-2">
            삭제
          </button>
        </div>
      </div>
      <img
        src={cardContent.imgUrl}
        alt="닉네임이 등록한 이미지"
        className="w-[25rem]"
      />
      <p className="font-semibold py-2">{cardContent.title}</p>
      <p className="font-normal pb-4 w-[25rem]">{cardContent.content}</p>
    </div>
  );
};

export default Card;
