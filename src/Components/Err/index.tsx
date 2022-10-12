import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../Assets/img/logo.png';
import './style.scss';

export const ErrPage = () => {
    const {t} = useTranslation();
    return (
        <div className="loading-err-page">
            <div className="logo-loading">
                <img src={logo} alt="Phoenix" />
                <div className="spinner"></div>
            </div>
            <span>{t('A_15')}</span>
        </div>
    )
}
