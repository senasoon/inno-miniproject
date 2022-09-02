import React from 'react';
import Card from '../components/detail-card/Card';
import CommentList from '../components/comment/CommentList';

const Detail = () => {
  return (
    <div className="flex">
      <Card />
      <CommentList />
    </div>
  );
};

export default Detail;
