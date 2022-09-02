import React from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const Comment = () => {
  return (
    <div className="flex justify-between mt-2">
      <div className="flex">
        <p className="font-semibold pr-2">닉네임</p>
        <p className="font-normal">여기에 댓글이 들어갑니다.</p>
      </div>
      <div>
        <button className="mr-2">
          <FaPencilAlt />
        </button>
        <button>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Comment;
