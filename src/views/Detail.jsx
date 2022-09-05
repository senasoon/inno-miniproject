import React from 'react';
// import { useParams } from 'react-router-dom';
import Card from '../components/detail-card/Card';
import Comment from '../components/comment/Comment';
// import axios from 'axios';

const Detail = () => {
  // const param = useParams();

  // const fetchData = async () => {
  //   await axios.get(`http://localhost:3001/post/${param.id}`);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="flex">
      <Card />
      <Comment />
    </div>
  );
};

export default Detail;
