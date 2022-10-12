import React, { useEffect } from 'react';
import i18next from 'i18next';
import logo from '../../../Assets/img/logo.png';
import useStore from '../../../Global/store';
import { ChangeTheme } from '../../../Components/Theme/action';
import './style.scss';

export const LoadingPhoenix = () => {
  const [state, dispatch] = useStore();
  const currentLang = localStorage.getItem('lang') as string;
  const currentTheme = localStorage.getItem('theme') as string;
  useEffect(() => {
    if (!currentLang) {
      localStorage.setItem('lang', state.Lang)
    } else {
      i18next.changeLanguage(currentLang);
    }
    if (!currentTheme) {
      localStorage.setItem('theme', state.Theme)
    } else {
      dispatch(ChangeTheme(currentTheme))
    }
  }, [currentLang, state.Lang, dispatch, currentTheme, state.Theme])
  return (
    <div className="loading">
      <div className="logo-loading">
        <img src={logo} alt="Phoenix" />
        <div className="spinner"></div>
      </div>
    </div>
  )
}
