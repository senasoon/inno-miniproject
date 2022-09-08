import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUserDB } from '../../redux/modules/userSlice';

const SignIn = () => {
  const dispatch = useDispatch();

  const memberId_ref = useRef(null);
  const password_ref = useRef(null);

  const loginHandler = async () => {
    if (memberId_ref.current.value == '' || password_ref.current.value == '') {
      window.alert('아이디와 비밀번호를 모두 입력하세요');
    } else {
      await dispatch(
        loginUserDB({
          nickname: memberId_ref.current.value,
          password: password_ref.current.value,
        }),
      );
    }
  };

  return (
    <div className="pt-12 grid place-content-center grid-cols-6 gap-4">
      <div className="col-start-3 col-span-3 place-content-center flex flex-col items-center justify-center w-full mt-30 max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-bold text-gray-600 sm:text-2xl dark:text-white">
          로그인
        </div>
        <div className="mt-5">
          <form action="#" autoComplete="off">
            <p className="text-gray-500 font-bold">닉네임</p>
            <div className="flex flex-col mb-8">
              <div className="flex relative ">
                <input
                  type="text"
                  id="id"
                  ref={memberId_ref}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-brown1 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <p className="text-gray-500 font-bold">비밀번호</p>
            <div className="flex flex-col mb-9">
              <div className="flex relative ">
                <input
                  type="password"
                  id="password"
                  ref={password_ref}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-brown1 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div className="self-center flex items-center justify-center w-1/3">
          <button
            type="submit"
            className="items-center py-4 px-2 bg-brown2 hover:bg-brown1 focus:ring-brown1 text-white w-full transition ease-in-out duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full "
            onClick={loginHandler}
          >
            로그인
          </button>
        </div>
        <div className="flex items-center justify-center mt-6">
          <Link
            to={'/signup'}
            className="inline-flex items-center text-xs text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
          >
            <span className="ml-2">
              계정이 없으신가요?<b>회원가입</b>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
