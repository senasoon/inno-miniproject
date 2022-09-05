import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __addUserThunk } from '../../redux/modules/userSlice';

const SignUp = () => {
  const [id, setId] = useState('');
  const [password, setPw] = useState('');
  const [password2, setPw2] = useState('');

  const signUpReq = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUpHandler = () => {
    if (id === '' || password === '' || password2 === '') {
      alert('빈칸없이 작성해주세요!');
      return;
    } else {
      dispatch(
        __addUserThunk({
          id,
          password,
        }),
      );
      signUpReq.error ? navigate('/login') : navigate('/signup');
    }
  };

  return (
    <div className="pt-28 grid place-content-center grid-cols-6 gap-4">
      <div className="col-start-3 col-span-3 place-items-center flex flex-col mt-30 max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-bold text-gray-600 sm:text-2xl dark:text-white">
          회원가입
        </div>
        <div className="mt-4">
          <form action="#" autoComplete="off">
            <p className="text-gray-500 font-bold">닉네임</p>
            <div className="flex flex-col mb-8">
              <div className="flex relative">
                <input
                  type="text"
                  id="id"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-brown1 focus:border-transparent"
                  onChange={(event) => {
                    setId(event.target.value);
                  }}
                />
              </div>
            </div>
            <p className="text-gray-500 font-bold">비밀번호</p>
            <div className="flex flex-col mb-8">
              <div className="flex relative ">
                <input
                  type="text"
                  id="password"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-brown1 focus:border-transparent"
                  onChange={(event) => {
                    setPw(event.target.value);
                  }}
                />
              </div>
            </div>
            <p className="text-gray-500 font-bold">비밀번호확인</p>
            <div className="flex flex-col mb-8">
              <div className="flex relative">
                <input
                  type="text"
                  id="password2"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-brown1 focus:border-transparent"
                  onChange={(event) => {
                    setPw2(event.target.value);
                  }}
                />
              </div>
              {password === password2 ? (
                password === '' && password2 === '' ? (
                  <></>
                ) : (
                  <p> 비밀번호가 일치합니다!! </p>
                )
              ) : (
                <p> 비밀번호가 일치하지 않습니다! </p>
              )}
            </div>
          </form>
        </div>
        <div className="self-center flex items-center justify-center w-1/3">
          <button
            type="submit"
            onClick={signUpHandler}
            className="items-center py-4 px-2 bg-brown2 hover:bg-brown1 focus:ring-brown1 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full "
          >
            회원가입
          </button>
        </div>
        <div className="flex items-center justify-center mt-6">
          <Link
            to={'/login'}
            className="inline-flex w-30 h-8 items-center text-xs text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
          >
            <span className="ml-2">
              계정이 있으신가요?<b>로그인</b>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
