/* eslint-disable */

import React, { useState } from 'react';
import instance from '../../shared/api';

import { FaCheck, FaArrowLeft } from 'react-icons/fa';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const CommentItem = ({ comment, commentList, setCommentList }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editComment, setEditComment] = useState('');

  const param = useParams();
  const userId = localStorage.getItem('id');
  const refreshToken = localStorage.getItem('freshToken');
  const options = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Refresh-Token': refreshToken,
    },
  };

  const deleteHandler = async (id) => {
    if (confirm('삭제된 데이터는 복구되지 않습니다. 댓글을 삭제 하시겠습니까?'))
      try {
        {
          await instance.delete(`/auth/comment/${id}`, options);
        }
        const newComment = commentList.filter((comment) => {
          return comment.commentId !== id;
        });
        alert('삭제되었습니다.');
        setCommentList(newComment);
      } catch (error) {
        alert(error.response.data.error.message);
      }
    return;
  };

  const editHandler = async (id) => {
    try {
      await instance.put(
        `auth/comment/${comment.commentId}`,
        {
          postId: Number(param.id),
          content: editComment.content,
        },
        options,
      );
      alert('댓글이 수정되었습니다.');
      setIsEditMode(false);
      setCommentList(
        commentList.map((comment) =>
          comment.commentId === id
            ? {
                ...comment,
                content: editComment.content,
              }
            : comment,
        ),
      );
    } catch (error) {
      alert(error.response.data.error.message);
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
          <div className="flex justify-between mt-2">
            <div className="flex">
              <p className="font-semibold pr-2">{comment.nickname}</p>
              <p className="font-normal">{comment.content}</p>
            </div>
            {userId === comment.nickname ? (
              <div className="flex">
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
                    deleteHandler(comment.commentId);
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between mt-2">
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
            <div className="flex">
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
                  editHandler(comment.commentId);
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
