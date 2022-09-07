// 카카오 리다이렉트될 화면
import React, { useEffect } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
//import { kakaoLoginDB } from '../../redux/modules/userSlice';
import { useNavigate, useLocation } from 'react-router-dom';
//import { getCookie } from '../../shared/Cookie';

const Kakao = () => {
  //const dispatch = useDispatch();

  // const accessToken = getCookie('token');
  const navigate = useNavigate();
  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];
  //인가코드
  const REST_API_KEY = 'c8d279b58bba9f7549a870597a7ce804';
  const REDIRECT_URI = 'http://localhost:3000/auth/kakao/callback';
  //const [user, setUser] = useState(null);
  const getKakaoToken = async () => {
    await fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then((res) => {
        res.json();
        //const kakaoAcc = res.kakao_account;
        // setUser({
        //   nickname: kakaoAcc.profile.nickname,
        // });
      })
      .then((data) => {
        if (data.acccess_token) {
          localStorage.setItem('token', data.acccess_token);
        } else {
          navigate('/');
        }
      });
  };

  useEffect(() => {
    getKakaoToken();
  });
  //   //인가코드

  //const code = new URL(window.location.href).searchParams.get('code');

  return (
    <>
      <div>
        <img
          style={{
            width: '300px',
            height: '300px',
            marginTop: '70px',
            marginLeft: '50px',
          }}
          src={
            'https://images.mypetlife.co.kr/content/uploads/2020/01/09151651/KakaoTalk_20191129_140559266.jpg'
          }
          alt=""
        />
      </div>
    </>
  );
};
export default Kakao;
