/* eslint-disable */

import React, { useState } from 'react';
import axios from 'axios';

import { FaCheck, FaArrowLeft } from 'react-icons/fa';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const CommentItem = ({ comment, commentList, setCommentList }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const deleteHandler = async (id) => {
    if (
      confirm('삭제된 데이터는 복구되지 않습니다. 게시글을 삭제 하시겠습니까?')
    ) {
      {
        await axios.delete(`http://localhost:3001/comment/${id}`);
      }
      alert('삭제되었습니다.');
      const newCommnet = commentList.filter((comment) => comment.id !== id);
      setCommentList([...newCommnet]);
    }
    return;
  };

  return (
    <div>
      {!isEditMode ? (
        <>
          <div key={comment.id} className="flex justify-between mt-2">
            <div className="flex">
              <p className="font-semibold pr-2">{comment.nickname}</p>
              <p className="font-normal">{comment.content}</p>
            </div>
            <div>
              <button
                className="mr-2"
                onClick={() => {
                  setIsEditMode(true);
                }}
              >
                <FaPencilAlt />
              </button>
              <button
                onClick={() => {
                  deleteHandler(comment.id);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div key={comment.id} className="flex justify-between mt-2">
            <div className="flex">
              <p className="font-semibold pr-2">{comment.nickname}</p>
              <input
                type="text"
                className="font-normal"
                defaultValue={comment.content}
              />
            </div>
            <div>
              <button
                className="mr-2"
                onClick={() => {
                  setIsEditMode(false);
                }}
              >
                <FaArrowLeft />
              </button>
              <button onClick={() => {}}>
                <FaCheck />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CommentItem;
