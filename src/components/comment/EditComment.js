/* eslint-disable */
import React, { useState, useEffect } from 'react';

const EditComment = ({ fetchComments }) => {
  const [getComment, setGetComment] = useState('');

  console.log('getComment', getComment);

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <div className="flex justify-between mt-2">
        <div className="flex">
          <p className="font-semibold pr-2"></p>
          <p className="font-normal">내용</p>
        </div>
      </div>
    </div>
  );
};

export default EditComment;
