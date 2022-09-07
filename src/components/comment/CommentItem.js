/* eslint-disable */

import React, { useState } from 'react';
import axios from 'axios';

import { FaCheck, FaArrowLeft } from 'react-icons/fa';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const CommentItem = ({ comment, commentList, setCommentList }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editComment, setEditComment] = useState('');

  const param = useParams();

  const deleteHandler = async (id) => {
    if (
      confirm('삭제된 데이터는 복구되지 않습니다. 댓글을 삭제 하시겠습니까?')
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

  const editHandler = async (e) => {
      try {
      await axios.put(`http://localhost:3001/comment/${comment.id}`, {
        id: comment.id,
        nickname: comment.nickname,
        content: editComment.content,
        postId: comment.postId,
      });
      alert('댓글이 수정되었습니다.');
      setIsEditMode(false);
    } catch (error) {
      // alert(error.response.data.error.message);
      console.log(error);
    }
  };

  const onChangeHandler = ({ target: { name, value } }) => {
    setEditComment({
      ...editComment,
      [name]: value,
    });
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
                name="content"
                type="text"
                className="font-normal"
                onChange={onChangeHandler}
                defaultValue={comment.content}
                autoFocus
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
              <button
                onClick={() => {
                  editHandler();
                }}
              >
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
