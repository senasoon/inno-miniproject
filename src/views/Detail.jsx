import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/detail-card/Card';
import CommentList from '../components/comment/CommentList';
import axios from 'axios';

const Detail = () => {
  const param = useParams();

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:3001/post/${param.id}`);
    console.log('data', data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex">
      <Card cardId={param.id} />
      <CommentList />
    </div>
  );
};

export default Detail;
