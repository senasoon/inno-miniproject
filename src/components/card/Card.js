import React from 'react';

const Card = () => {
  return (
    <div className="bg-white w-48 h-56 shadow-md">
      <div className="mt-4 w-40 h-40 bg-gray-300 m-auto"></div>
      <div className="flex justify-between mx-4 h-12 items-center">
        <p className="text-xs">우리집 강아지 사진</p>
        <button className="text-xs">➕</button>
      </div>
    </div>
  );
};

export default Card;
