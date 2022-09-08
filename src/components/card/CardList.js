import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from './Card';
import { __getPosts } from '../../redux/modules/postsSlice';

const CardList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  const { isLoading, error, posts } = useSelector((state) => state.posts);

  // 로딩 화면
  if (isLoading) {
    return <div className="text-center text-brown1">로딩 중....</div>;
  }

  // 에러 화면
  if (error) {
    return <div className="text-center text-brown1">{error.message}</div>;
  }

  return (
    <div className="mx-24 mb-8 pt-8 flex flex-row  grid grid-cols-4 gap-y-6 justify-items-center">
      {posts.data?.map((post) => (
        <Card {...post} key={post.postId} />
      ))}
    </div>
  );
};

export default CardList;
