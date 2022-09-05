import React from 'react';

import CommentInput from './CommentInput';
import CommentList from './CommentList';

const Comment = () => {
  return (
    <div>
      <div className="card w-[34rem] h-[32rem]">
        <CommentInput />
        <CommentList />
      </div>
    </div>
  );
};

export default Comment;
