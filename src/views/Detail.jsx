import React from 'react';
import Card from '../components/detail-card/Card';
import Comment from '../components/comment/Comment';

const Detail = () => {
  return (
    <div className="flex mx-auto">
      <Card />
      <Comment />
    </div>
  );
};

export default Detail;
