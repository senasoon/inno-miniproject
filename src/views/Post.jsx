import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/form/Form';

const Post = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      alert('로그인이 필요합니다.');
      navigate('/login');
    }
  }, []);
  return <Form />;
};

export default Post;
