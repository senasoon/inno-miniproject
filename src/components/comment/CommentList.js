import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../shared/api';

import CommentItem from './CommentItem';
import CommentInput from './CommentInput';

const CommentList = () => {
  const [commentList, setCommentList] = useState('');

  const param = useParams();

  const fetchComments = async () => {
    const { data } = await instance.get(`/comment/${param.id}`);
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
              key={comment.commentId}
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
