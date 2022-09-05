import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const CommentList = () => {
  const [getComment, setGetComment] = useState('');

  const param = useParams();

  const fetchComments = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/comment/?postId=${param.id}`,
    );
    setGetComment(data);
  };

  // const resetCommentList = () => {
  //   fetchComments();
  // }

  const deleteHandler = (comment) => {
    if (
      confirm('삭제된 데이터는 복구되지 않습니다. 게시글을 삭제 하시겠습니까?')
    ) {
      {
        axios.delete(`http://localhost:3001/comment/${comment}`);
      }
      alert('삭제되었습니다.');
      fetchComments();
    }
    return;
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      {getComment
        ? getComment.map((comment) => (
            <div key={comment.id} className="flex justify-between mt-2">
              <div className="flex">
                <p className="font-semibold pr-2">
                  {comment ? comment.nickName : 'null'}
                </p>
                <p className="font-normal">{comment.content}</p>
              </div>
              <div>
                <button className="mr-2">
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
          ))
        : null}
    </div>
  );
};

export default CommentList;
