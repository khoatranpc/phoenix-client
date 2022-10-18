import React, { useEffect, useState } from 'react';
import { Switch } from 'antd';
import { useDispatch } from 'react-redux';
import { THEME_SUCCESS } from './reducer';
import { THEME } from '../../Global/enum';
import { changeTheme } from './action';
import './style.scss';

export const ChangeTheme = () => {
    const dispatch = useDispatch();
    const [switchTheme, setswitchTheme] = useState<boolean>((localStorage.getItem('theme') as string) === 'LIGHT' ? true : false);
    const setTheme = () => {
        setswitchTheme(!switchTheme);
    }
    useEffect(() => {
        const getTheme = switchTheme ? THEME.LIGHT : THEME.DARK;
        document.querySelector('div#root')?.setAttribute('class', getTheme)
        localStorage.setItem('theme', getTheme)
        dispatch(changeTheme({
            type: THEME_SUCCESS,
            payload: {
                current: getTheme
            }
        }))
    }, [switchTheme])

    return (
        <div className="option-theme">
            <Switch
                className={`${switchTheme}`}
                defaultChecked={switchTheme}
                onChange={() => {
                    setTheme();
                }}

            />
        </div>
    )
}
