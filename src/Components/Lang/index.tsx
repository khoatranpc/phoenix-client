import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown, Menu } from 'antd';
import i18next from 'i18next';
import { En, Vietnam } from '../../Assets/img';
import { ReactComponent as VietnamSVG } from '../../Assets/svg/Vietnam.svg';
import { ReactComponent as EnSVG } from '../../Assets/svg/UK.svg';
import useStore from '../../Global/store';
import { switchLang } from './action';
import { LANG_SUCCESS } from './reducer';
import './style.scss';

interface OptionLangProps {
    keyVN: string;
    keyEN: string;
    titleVN: string;
    titleEN: string;
    currentLang: string;
    dispatch: (action: any) => void;
}
const OpionLang = (props: OptionLangProps) => {
    const { t } = useTranslation();
    const handleChangeLang = (key: string) => {
        if (key !== localStorage.getItem(`${process.env.REACT_APP_DOMAIN}Lang`) as string) {
            props.dispatch(switchLang({
                type: LANG_SUCCESS,
                payload: {
                    lang: key
                }
            }));
            localStorage.setItem(`${process.env.REACT_APP_DOMAIN}Lang`, key)
            i18next.changeLanguage(key);
        }
    }
    return (
        <Menu
            items={[
                {
                    key: props.keyVN,
                    label: (
                        <div><img src={Vietnam} alt="VI" /><span>{t('A_8')}</span></div>
                    ),
                    className: `lang ${props.currentLang === 'vi' && 'vi'}`,
                    onClick: (e) => {
                        handleChangeLang(e.key)
                    }
                },
                {
                    key: props.keyEN,
                    label: (
                        <div><img src={En} alt="EN" /><span>{t('A_9')}</span></div>
                    ),
                    className: `lang ${props.currentLang === 'en' && 'vi'}`,
                    onClick: (e) => {
                        handleChangeLang(e.key)
                    }
                }
            ]}
        />
    );
}
const Lang = () => {
    const [state, dispatch] = useStore();
    const currentLang = localStorage.getItem(`${process.env.REACT_APP_DOMAIN}Lang`) as string;
    useEffect(() => {
        if (!currentLang) {
            localStorage.setItem(`${process.env.REACT_APP_DOMAIN}Lang`, state.Lang)
        } else {
            i18next.changeLanguage(currentLang);
        }
    }, [currentLang, state.Lang])
    return (
        <div className="optional-lang">
            <Dropdown overlay={OpionLang({
                keyVN: 'vi',
                keyEN: 'en',
                titleVN: 'Việt Nam',
                titleEN: 'Tiếng Anh',
                currentLang: localStorage.getItem(`${process.env.REACT_APP_DOMAIN}Lang`) as string,
                dispatch: dispatch
            })} placement="bottom" arrow={{ pointAtCenter: true }} trigger={['hover']} className="lang-option">
                <button className={currentLang}>{currentLang === 'vi' && <VietnamSVG />}{currentLang === 'en' && <EnSVG />}{!currentLang && <VietnamSVG />}</button>
            </Dropdown>
        </div>
    )
}

export default Lang;