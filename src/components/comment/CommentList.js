import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import CommentItem from './CommentItem';
import CommentInput from './CommentInput';

const CommentList = () => {
  const [commentList, setCommentList] = useState('');

  const param = useParams();

  const fetchComments = async () => {
    const { data } = await axios.get(
      `http://13.209.88.134/comment/${param.id}`,
    );
    setCommentList(data.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <CommentInput setCommentList={setCommentList} commentList={commentList} />
      {commentList
        ? commentList.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              commentList={commentList}
              setCommentList={setCommentList}
            />
          ))
        : null}
    </div>
  );
};

export default CommentList;
