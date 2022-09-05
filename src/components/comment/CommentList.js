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
    </div>
  );
};

export default CommentList;
