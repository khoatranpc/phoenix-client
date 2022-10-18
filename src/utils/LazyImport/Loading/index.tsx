import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';
import logo from '../../../Assets/img/logo.png';
import { LANG_SUCCESS } from '../../../Components/Lang/reducer';
import { switchLang } from '../../../Components/Lang/action';
import { LANG, THEME } from '../../../Global/enum';
import { THEME_SUCCESS } from '../../../Components/Theme/reducer';
import { changeTheme } from '../../../Components/Theme/action';
import './style.scss';

export const LoadingPhoenix = () => {
  const dispatch = useDispatch();
  const currentLang = localStorage.getItem(`${process.env.REACT_APP_DOMAIN}Lang`) as string;
  const currentTheme = localStorage.getItem('theme') as string;
  useEffect(() => {
    if (!currentLang) {
      dispatch(switchLang({
        type: LANG_SUCCESS,
        payload: {
          current: LANG.VI
        }
      }))
      localStorage.setItem(`${process.env.REACT_APP_DOMAIN}Lang`, LANG.VI);
    } else {
      i18next.changeLanguage(currentLang);
    }
    if (!currentTheme) {
      dispatch(changeTheme({
        type: THEME_SUCCESS,
        payload: {
          current: THEME.LIGHT
        }
      }))
      localStorage.setItem('theme', THEME.LIGHT)
    } else {
      dispatch(changeTheme({
        type: THEME_SUCCESS,
        payload: {
          current: currentTheme
        }
      }))
    }
  }, [])
  return (
    <div className="loading">
      <div className="logo-loading">
        <img src={logo} alt="Phoenix" />
        <div className="spinner"></div>
      </div>
    </div>
  )
}
