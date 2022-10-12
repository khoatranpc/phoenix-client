import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LazyImport } from './utils/LazyImport';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { ErrPage } from './Components/Err';
import './App.css';


const Layout = lazy(() => import('./Components/Layout'));
function App() {
  return (
    <Routes>
      <Route path='/' element={<LazyImport><Layout /></LazyImport>}>
        <Route path='' element={<Home />} ></Route>
        <Route path='/auth'>
          <Route path='login' element={<Login />}></Route>
        </Route>
        <Route path='*' element={<ErrPage />} />
      </Route >
    </Routes >
  );
}

export default App