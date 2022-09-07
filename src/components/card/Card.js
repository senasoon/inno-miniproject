import React from 'react';
import { VscAdd } from 'react-icons/vsc';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
useNavigate;

const Card = ({ postId, title, imgUrl }) => {
  Card.propTypes = {
    title: PropTypes.node.isRequired,
    imgUrl: PropTypes.node.isRequired,
    postId: PropTypes.node.isRequired,
  };

  const navigate = useNavigate();
  return (
    <div className="bg-white w-48 h-56 shadow-md">
      <img
        onClick={() => navigate(`/detail/${postId}`)}
        src={imgUrl}
        className="mt-4 w-40 h-40 m-auto bg-cover cursor-pointer"
      />
      <div className="flex justify-between mx-4 h-12 items-center">
        <p className="text-xs">{title}</p>
        <button
          onClick={() => navigate(`/detail/${postId}`)}
          className="text-sm"
        >
          <VscAdd />
        </button>
      </div>
    </div>
  );
};

export default Card;
