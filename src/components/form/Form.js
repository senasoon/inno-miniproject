import React from 'react';

const Form = () => {
  return (
    <div className='pt-24 grid place-content-center'>
      <div className='w-80 h-96 bg-white shadow-md flex flex-col justify-center items-center'>
        <button className='self-end mt-2 mr-2 text-xs'>✖</button>
        <p className='mt-4 mb-6 font-semibold text-brown1'>새 게시물</p>
        <div className='flex flex-col'>
          <input type='text' placeholder='제목' className='m-2 p-1 w-60 border rounded-sm text-xs '/>
          <textarea placeholder='내용' className='m-2 p-1 w-60 h-24 border rounded-sm text-xs block whitespace-pre-wrap'/>
          <button className='self-start w-20 h-5 m-2 text-xs bg-gray-200 rounded-xl'>파일 선택</button>
        </div>
        <button className='mt-12 mb-4 bg-brown1 text-white w-28 h-8'>등록하기</button>
      </div>
    </div>
  );
};

export default Form;
