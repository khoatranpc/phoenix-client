import React from 'react';
import logo from '../../Assets/img/logo.png';
import './style.scss';

export const SpinLoading = () => {
  return (
    <div className="spinner">
      <div className="logo-loading">
        <img src={logo} alt="Phoenix" />
        <div className="spinner"></div>
      </div>
    </div>
  )
}
