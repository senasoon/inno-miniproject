import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __postSignup } from '../../redux/modules/userSlice';

const SignUp = () => {
  const [id, setId] = useState('');
  const [password, setPw] = useState('');
  const [password2, setPw2] = useState('');
  let [idCheck, setIdCheck] = useState(false);
  let [pwCheck, setPwCheck] = useState(false);

  const signUpReq = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUpHandler = () => {
    if (id === '' || password === '' || password2 === '') {
      alert('빈칸없이 작성해주세요!');
      return;
    } else if (password != password2) {
      alert('동일한 비밀번호를 입력해주세요!');
      return;
    } else if (pwCheck < 0) {
      alert('패스워드를 형식에 맞게 입력해주세요');
      return;
    } else if (password.length < 4) {
      alert('패스워드를 4자이상 적어주세요!');
      return;
    } else {
      dispatch(
        __postSignup({
          nickname: id,
          password,
          passwordConfirm: password2,
        }),
      );
      console.log(signUpReq);
      signUpReq.error ? navigate('/login') : navigate('/signup');
    }
  };

  const spe = id.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  const eng = id.search(/^[a-zA-Z가-힣1-9]{4,11}$/);
  useEffect(() => {
    if (id.length > 6 && id.length < 2) {
      setIdCheck(false);
    } else if (id.search(/\s/) != -1) {
      document.getElementById('id').focus();
      alert('닉네임에 빈칸을 입력하지 마세요');
      setIdCheck(false);
    } else if (spe > 0) {
      document.getElementById('id').focus();
      alert('닉네임에 특수문자가 있습니다.');
      setIdCheck(false);
    } else if (eng < 0) {
      setIdCheck(false);
    } else {
      setIdCheck(true);
    }
  }, [id]);
  useEffect(() => {
    if (password.length > 10) {
      alert('비밀번호는 10자이하로 입력해주세요.');
      document.getElementById('password').focus();
      setPwCheck(false);
    } else if (password.search(/\s/) != -1) {
      document.getElementById('password').focus();
      alert('비밀번호에 빈칸을 입력하지 마세요');
      setPwCheck(false);
    } else if (password === null) {
      setPwCheck(false);
    } else {
      setPwCheck(true);
    }
  }, [password, password2]);
  return (
    <div className="pt-28 grid place-content-center grid-cols-6 gap-4">
      <div className="col-start-3 col-span-3 flex flex-col mt-30 max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-bold text-gray-600 sm:text-2xl dark:text-white">
          회원가입
        </div>
        <div className="mt-4 self-center w-3/4">
          <form action="#" autoComplete="off">
            <p className="text-gray-500 font-bold">닉네임</p>
            <div className="flex flex-col mb-8">
              <div className="flex relative">
                <input
                  type="text"
                  id="id"
                  className="w-30 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-brown1 focus:border-transparent"
                  onChange={(event) => {
                    setId(event.target.value);
                  }}
                />
              </div>
              {!idCheck ? (
                id === '' ? (
                  <p className="text-sm">영문/한글 4자이상을 적어주세요!</p>
                ) : (
                  <p className="text-red-600">
                    닉네임을 형식에 맞게 작성해주세요!
                  </p>
                )
              ) : (
                <p className="text-green-700">좋은닉네임이네요!</p>
              )}
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
                password === '' &&
                password2 === '' &&
                password.length < 4 &&
                password2.length < 4 ? (
                  <p className="text-xs">비밀번호는 4자이상입니다</p>
                ) : (
                  <p className="text-green-700"> 비밀번호가 일치합니다!! </p>
                )
              ) : (
                <p className="text-red-600"> 비밀번호가 일치하지 않습니다! </p>
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
