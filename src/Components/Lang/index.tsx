import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown, Menu } from 'antd';
import i18next from 'i18next';
import { En, Vietnam } from '../../Assets/img';
import { ReactComponent as VietnamSVG } from '../../Assets/svg/Vietnam.svg';
import { ReactComponent as EnSVG } from '../../Assets/svg/UK.svg';
import useStore from '../../Global/store';
import { handleLang } from './action';
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
        if (key !== localStorage.getItem('lang') as string) {
            props.dispatch(handleLang(key));
            localStorage.setItem('lang', key)
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
    const currentLang = localStorage.getItem('lang') as string;
    useEffect(() => {
        if (!currentLang) {
            localStorage.setItem('lang', state.Lang)
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
                currentLang: localStorage.getItem('lang') as string,
                dispatch: dispatch
            })} placement="bottom" arrow={{ pointAtCenter: true }} trigger={['click']} className="lang-option">
                <button className={currentLang}>{currentLang === 'vi' && <VietnamSVG />}{currentLang === 'en' && <EnSVG />}</button>
            </Dropdown>
        </div>
    )
}

export default Lang;