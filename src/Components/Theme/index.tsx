import React, { useEffect, useState } from 'react';
import { Switch } from 'antd';
import { THEME } from '../../Global/enum';
import useStore from '../../Global/store';
import { ChangeTheme as handleChangeTheme } from './action';
import './style.scss';

export const ChangeTheme = () => {
    const [state, dispatch] = useStore();
    const [switchTheme, setswitchTheme] = useState<boolean>((localStorage.getItem('theme') as string) === 'LIGHT' ? true : false);
    const setTheme = () => {
        setswitchTheme(!switchTheme);
    }
    useEffect(() => {
        dispatch(handleChangeTheme((switchTheme ? THEME.LIGHT : THEME.DARK)))
        document.querySelector('div#root')?.setAttribute('class', state.Theme)
        localStorage.setItem('theme', state.Theme)
        return () => {
        }
    }, [switchTheme, state.Theme, dispatch])


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
