import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { FaPencilAlt, FaTrash } from 'react-icons/fa';

import CommentItem from './CommentItem';
import CommentInput from './CommentInput';

const CommentList = () => {
  const [commentList, setCommentList] = useState('');

  const param = useParams();

  const fetchComments = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/comment/?postId=${param.id}`,
    );
    setCommentList(data);
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
