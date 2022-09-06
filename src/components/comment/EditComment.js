import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';

const EditComment = (comment) => {
  const [getComment, setGetComment] = useState();
  const [isEditMode, setIsEditMode] = useState(false);
  console.log(isEditMode);
  console.log(comment);

  const param = useParams();

  const fetchComments = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/comment/?postId=${param.id}`,
    );
    setGetComment(data);
  };

  const handleToggleEditMode = () => {
    if (isEditMode) setGetComment(comment);
    setIsEditMode((prev) => !prev);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      {getComment ? (
        <div key={getComment.id} className="flex justify-between mt-2">
          <div className="flex">
            <p className="font-semibold pr-2">
              {getComment ? getComment.nickname : 'null'}
            </p>
            <input
              type="text"
              className="font-normal"
              defaultValue={getComment.content}
            />
          </div>
          <div>
            <button className="mr-2" onClick={handleToggleEditMode}>
              <FaArrowLeft />
            </button>
            <button onClick={() => {}}>
              <FaCheck />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EditComment;
