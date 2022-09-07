/* eslint-disable */

import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CommentInput = ({ commentList, setCommentList }) => {
  const [comment, setComment] = useState('');

  const param = useParams();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios({
      method: 'post',
      url: `http://localhost:3001/comment`,
      data: {
        nickname: '닉네임',
        content: comment,
        postId: param.id,
      },
    });
    alert('댓글이 등록 되었습니다.');
    setCommentList([...commentList, data]);
    setComment('');
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex justify-between">
          <input
            className="w-4/5 shadow appearance-none border py-2 px-3 text-gray-700 focus:outline-none"
            type="text"
            placeholder="댓글을 입력해주세요."
            onChange={(e) => onChangeHandler(e)}
            required
            value={comment}
          />
          <button className="bg-brown1 button">등록</button>
        </div>
      </form>
    </div>
  );
};

export default CommentInput;
