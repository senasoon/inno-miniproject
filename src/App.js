import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './views/Detail';
import Main from './views/Main';
import Post from './views/Post';
import Login from './views/Login';
import Register from './views/Register';
import Header from './components/header/Header';
import Kakao from './components/sign-in/Kakao';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/post" element={<Post />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/kakao/callback" element={<Kakao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
