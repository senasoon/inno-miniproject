import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './views/Detail';
import Main from './views/Main';
import Post from './views/Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;