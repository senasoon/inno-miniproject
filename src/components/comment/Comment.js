import React from 'react';

import CommentInput from './CommentInput';
import CommentList from './CommentList';

const Comment = () => {
  return (
    <div className="card w-[34rem] h-[34rem]">
      <CommentInput />
      <CommentList />
    </div>
  );
};

export default Comment;
