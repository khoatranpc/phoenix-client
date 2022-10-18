import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { logo } from '../../Assets/img';
import Lang from '../Lang';
import { ChangeTheme } from '../Theme';
import './style.scss';

export const Header = () => {
    const { t } = useTranslation();
    return (
        <div className="header-body">
            <div className="logo"><Link to={'/'}><img src={logo} alt="Home Page" /></Link></div>
            <ul className="nav-menu">
                <li className='item'><NavLink to={'/introdution'}>{t('A_2')}</NavLink></li>
                <li className='item'><NavLink to={'/cources'}>{t('A_61')}</NavLink></li>
                <li className='item'><NavLink to={'/subjects'}>{t('A_3')}</NavLink></li>
                <li className='item'><NavLink to={'/teachers'}>{t('A_4')}</NavLink></li>
                <li className='item'><NavLink to={'/contact'}>{t('A_5')}</NavLink></li>
                <ChangeTheme />
                <Lang />
                <li><NavLink to={'/account/login'}>{t('A_6')}</NavLink>/<NavLink to={'/account/register'}>{t('A_7')}</NavLink></li>
            </ul>
        </div>
    )
}
