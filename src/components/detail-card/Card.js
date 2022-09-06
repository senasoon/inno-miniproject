import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Card = () => {
  const [cardContent, setCardContent] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [editCard, setEditCard] = useState('');

  const param = useParams();
  const navigate = useNavigate();

  const fetchCard = async () => {
    const { data } = await axios.get(`http://13.209.88.134/post/${param.id}`);
    setCardContent(data);
  };

  const deleteHandler = async () => {
    if (
      confirm('삭제된 데이터는 복구되지 않습니다. 게시글을 삭제 하시겠습니까?')
    )
      try {
        await axios.delete(`http://13.209.88.134/auth/post/${param.id}`);
        alert('게시글이 삭제되었습니다. 홈으로 이동합니다.');
        navigate('/');
      } catch (error) {
        alert(error.response.data.error.message);
      }
    return;
  };

  const editCardContent = async (edit) => {
    try {
      await axios.put(`http://13.209.88.134/auth/post/${param.id}`, edit);
      alert('게시글이 수정 되었습니다.');
      resetCardContent();
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };

  const resetCardContent = () => {
    fetchCard();
    setIsEditMode(false);
  };

  useEffect(() => {
    fetchCard();
  }, []);

  const onChangeHandler = ({ target: { name, value } }) => {
    setEditCard({
      ...editCard,
      [name]: value,
    });
  };

  return (
    <div className="card h-[34rem]">
      {isEditMode ? (
        <>
          <div className="flex justify-between">
            <p className="py-2">{cardContent.nickname}</p>
            <div>
              <button
                onClick={() => {
                  setIsEditMode(false);
                }}
                className="p-2"
              >
                취소
              </button>
              <button
                onClick={() => {
                  editCardContent(editCard);
                }}
                className="py-2"
              >
                완료
              </button>
            </div>
          </div>
          <div className="overflow-hidden w-[25rem] h-[25rem]">
            <img
              src={cardContent.imgUrl}
              alt="닉네임이 등록한 이미지"
              className="w-full h-full object-cover"
            />
          </div>
          <form>
            <input
              name="title"
              type="text"
              defaultValue={cardContent.title}
              className="block font-semibold py-2 focus:outline-none"
              placeholder="수정할 제목을 입력해주세요."
              onChange={onChangeHandler}
            />
            <input
              name="content"
              type="text"
              defaultValue={cardContent.content}
              className=" block font-normal pb-4 w-[25rem] focus:outline-none"
              placeholder="수정할 내용을 입력해주세요."
              onChange={onChangeHandler}
              autoFocus
            />
          </form>
        </>
      ) : (
        <>
          <div className="flex justify-between">
            <p className="py-2">{cardContent.nickname}</p>
            <div>
              <button
                onClick={() => {
                  setIsEditMode(true);
                }}
                className="p-2"
              >
                수정
              </button>
              <button onClick={deleteHandler} className="py-2">
                삭제
              </button>
            </div>
          </div>
          <div className="overflow-hidden w-[25rem] h-[25rem]">
            <img
              src={cardContent.imgUrl}
              alt={cardContent.title}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold py-2">{cardContent.title}</p>
          <p className="font-normal pb-4 w-[25rem]">{cardContent.content}</p>
        </>
      )}
    </div>
  );
};

export default Card;
