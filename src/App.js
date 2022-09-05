import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './views/Detail';
import Main from './views/Main';
import Post from './views/Post';
import Login from './views/Login';
import Register from './views/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/post" element={<Post />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
