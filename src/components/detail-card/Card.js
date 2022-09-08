import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../../shared/api';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const Card = () => {
  const [cardContent, setCardContent] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [imgRead, setImgRead] = useState('');
  const [fileImgPath, setFileImgPath] = useState('');
  const [imgFile, setImgFile] = useState({});

  const param = useParams();
  const navigate = useNavigate();
  const refreshToken = localStorage.getItem('freshToken');
  const userId = localStorage.getItem('id');

  const options = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Refresh-Token': refreshToken,
    },
  };

  const fetchCard = async () => {
    const { data } = await instance.get(`/post/${param.id}`);
    setCardContent(data);
  };

  const deleteHandler = async () => {
    if (
      confirm('삭제된 데이터는 복구되지 않습니다. 게시글을 삭제 하시겠습니까?')
    )
      try {
        await instance.delete(`/auth/post/${param.id}`, options);
        alert('게시글이 삭제되었습니다. 홈으로 이동합니다.');
        navigate('/');
      } catch (error) {
        alert(error.response.data.error.message);
      }
    return;
  };

  const editCardContent = async () => {
    const payload = new FormData();
    payload.append('multipartFile', imgFile);
    const contents = {
      title: cardContent.title,
      content: cardContent.content,
    };
    const blob = new Blob([JSON.stringify(contents)], {
      type: 'application/json',
    });
    payload.append('requestDto', blob);

    try {
      await instance.put(`/auth/post/${param.id}`, payload, options);
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
    setCardContent({
      ...cardContent,
      [name]: value,
    });
  };

  const onChangeImgHandler = (e) => {
    setFileImgPath(e.target.value);
    setImgFile(e.target.files[0]);

    let reader = new FileReader();
    reader.onload = function () {
      setImgRead(reader.result);
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="card">
      {isEditMode ? (
        cardContent && (
          <>
            <div className="flex justify-between">
              <p className="py-2 font-semibold">
                {cardContent.author}님의 일상
              </p>
              <div>
                <button
                  onClick={() => {
                    setIsEditMode(false);
                  }}
                  className="p-2"
                >
                  <FaArrowLeft />
                </button>
                <button onClick={editCardContent} className="py-2">
                  <FaCheck />
                </button>
              </div>
            </div>
            <div className="overflow-hidden w-[25rem] h-[25rem]">
              <img
                src={imgRead || cardContent.imgUrl}
                alt="닉네임이 등록한 이미지"
                className="w-full h-full object-cover"
              />
            </div>
            <form>
              <div>
                <label
                  htmlFor="imgUrl"
                  className="self-start px-3 py-1 m-2 text-xs bg-transparent rounded-xl ring-1 ring-brown2 hover:ring-brown3 hover:shadow-md transition ease-in duration-200 cursor-pointer"
                >
                  파일 선택
                </label>
                <input
                  disabled
                  value={fileImgPath || cardContent.imgUrl}
                  className="bg-transparent text-xs"
                />
                <input
                  type="file"
                  id="imgUrl"
                  onChange={onChangeImgHandler}
                  className="absolute w-0 h-0 p-0 border-0 overflow-hidden"
                />
              </div>
              <input
                name="title"
                type="text"
                value={cardContent.title}
                className="block font-semibold py-2 focus:outline-none"
                placeholder="수정할 제목을 입력해주세요."
                onChange={onChangeHandler}
              />
              <textarea
                name="content"
                type="text"
                value={cardContent.content}
                className=" block font-normal pb-4 w-[25rem] focus:outline-none"
                placeholder="수정할 내용을 입력해주세요."
                onChange={onChangeHandler}
                autoFocus
              />
            </form>
          </>
        )
      ) : (
        <>
          <div className="flex justify-between">
            <p className="py-2 font-semibold">{cardContent.author}님의 일상</p>
            <div>
              {userId === cardContent.author ? (
                <button
                  onClick={() => {
                    setIsEditMode(true);
                  }}
                  className="p-2"
                >
                  <FaPencilAlt />
                </button>
              ) : null}
              {userId === cardContent.author ? (
                <button onClick={deleteHandler} className="py-2">
                  <FaTrash />
                </button>
              ) : null}
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
