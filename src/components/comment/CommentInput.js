import React from 'react';

const CommentInput = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex justify-between">
          <input
            className="w-4/5 shadow appearance-none border py-2 px-3 text-gray-700 focus:outline-none"
            type="text"
            placeholder="댓글을 입력해주세요."
            required
          />
          <button className="bg-brown1 button">등록</button>
        </div>
      </form>
    </div>
  );
};

export default CommentInput;
