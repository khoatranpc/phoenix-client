import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LazyImport } from './utils/LazyImport';
import Home from './Components/Home';
import Login from './Components/Login';
import ErrPage from './Components/Err';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ForgotPassword/ResetPassword';
import Introdution from './Components/Introdution';
import Cources from './Components/Cources';
import './App.scss';

const Layout = lazy(() => import('./Components/Layout'));
function App() {
  return (
    <Routes>
      <Route path='/' element={<LazyImport><Layout /></LazyImport>}>
        <Route path='' element={<Home />} ></Route>
        <Route path='introdution' element={<Introdution />} ></Route>
        <Route path='cources' element={<Cources />} ></Route>
        <Route path='account'>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='forgot-password' element={<ForgotPassword />}></Route>
          <Route path='reset-password/auth' element={<ResetPassword />}></Route>
        </Route>
        <Route path='*' element={<ErrPage />} />
      </Route >
    </Routes >
  );
}

export default App