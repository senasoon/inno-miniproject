import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './views/Detail';
import Login from './views/Login';
import Register from './views/Register';
import Main from './views/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" eletment={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/signin" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
