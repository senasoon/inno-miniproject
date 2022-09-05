import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from './Card';
import { __getPosts } from '../../redux/modules/postsSlice';

const CardList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="mx-24 mb-8 pt-20 flex flex-row  grid grid-cols-4 gap-y-6 justify-items-center">
      {posts?.map((post) => (
        <Card {...post} key={post.id} />
      ))}
    </div>
  );
};

export default CardList;
