import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { __addPosts } from '../../redux/modules/postsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imgRead, setImgRead] = useState('');
  const [imgValue, setImgValue] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContentHandler = (e) => {
    setContent(e.target.value);
  };

  const onSubmitHandler = () => {
    const formData = new FormData();
    formData.append('img', imgUrl);

    const contents = {
      title: title,
      content: content,
    };

    const blob = new Blob([JSON.stringify(contents)], {
      type: 'application/json',
    });

    formData.append('data', blob);

    dispatch(__addPosts(formData));
    navigate('/');
  };

  const onChangeImgHandler = (e) => {
    setImgValue(e.target.value);
    setImgUrl(e.target.files[0]);

    let reader = new FileReader();
    reader.onload = function () {
      setImgRead(reader.result);
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    console.log(imgUrl, imgRead);
  };

  return (
    <form
      className="pt-24 grid place-content-center"
      onSubmit={onSubmitHandler}
    >
      <div className="w-80 h-max mb-10 bg-white shadow-md flex flex-col justify-center items-center">
        <button className="self-end mt-2 mr-2">
          <CgClose />
        </button>
        <p className="mt-4 mb-6 font-semibold text-brown1">새 게시물</p>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="제목"
            value={title}
            onChange={onChangeTitleHandler}
            className="m-2 p-1 w-60 border rounded-sm text-xs"
          />
          <textarea
            placeholder="내용"
            value={content}
            onChange={onChangeContentHandler}
            className="m-2 p-1 w-60 h-24 border rounded-sm text-xs block whitespace-pre-wrap"
          />
          <div>
            <label
              htmlFor="imgUrl"
              className="self-start px-3 py-1 m-2 text-xs bg-gray-200 rounded-xl"
            >
              파일 선택
            </label>
            <input
              disabled
              value={imgValue}
              className="bg-transparent text-xs"
            />
            <input
              type="file"
              id="imgUrl"
              onChange={onChangeImgHandler}
              className="absolute w-0 h-0 p-0 border-0 overflow-hidden"
            />
          </div>
          <div className="mt-4">
            {imgRead && <img src={imgRead} className="w-64 h-54" />}
          </div>
        </div>
        <button className="mt-12 mb-4 items-center bg-brown2 hover:bg-brown1 focus:ring-brown1 text-white w-28 h-8 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full font-normal">
          등록하기
        </button>
      </div>
    </form>
  );
};

export default Form;
