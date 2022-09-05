/* eslint-disable */
import React from 'react';
import { VscAdd } from 'react-icons/vsc';

const Card = ({ title, nickname, imgUrl }) => {
  return (
    <div className="bg-white w-48 h-56 shadow-md">
      <img src={imgUrl} className="mt-4 w-40 h-40 m-auto" />
      <div className="flex justify-between mx-4 h-12 items-center">
        <p className="text-xs">{title}</p>
        <button className="text-sm">
          <VscAdd />
        </button>
      </div>
    </div>
  );
};

export default Card;
