import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const CommentList = () => {
  const [getComment, setGetComment] = useState('');
  console.log(getComment[0]);

  const param = useParams();

  const fetchComments = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/comment/?postId=${param.id}`,
    );
    setGetComment(data);
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
                <button>
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
