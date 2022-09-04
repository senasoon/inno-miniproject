import React from 'react';
import Card from './Card';

const CardList = () => {
  return (
    <div className="mx-24 pt-20 flex flex-row  grid grid-cols-4 gap-y-6 justify-items-center">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
