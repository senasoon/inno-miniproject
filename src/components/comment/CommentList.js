import React from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';

const CommentList = () => {
  return (
    <div>
      <div className="card w-[34rem] h-[32rem]">
        <CommentInput />
        <Comment />
      </div>
    </div>
  );
};

export default CommentList;
