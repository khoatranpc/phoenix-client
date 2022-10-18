import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input } from 'antd';
import { useQuery } from '../../../Global/Hook';
import { validateEmail } from '../../../utils/validation';
import { SpinLoading } from '../../SpinLoading';
import './style.scss';

interface payloadToken {
    email: string | null;
    token: string | null;
}
const ResetPassword = () => {
    const { t } = useTranslation();
    const queryParams = useQuery();
    const payload: payloadToken = {
        email: queryParams.get('email'),
        token: queryParams.get('token')
    }
    const [spin, setSpin] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false);
    const [mess, setMess] = useState<boolean>(false);
    const onFinish = (values: any) => {
        console.log('Success: ', values);
        setSpin(true)
        setChecked(true);
        setTimeout(() => {
            setSpin(false)
            setMess(true)
        }, 1000)
    };

    if (payload.email === null || validateEmail(payload.email as string) === false || payload.token === null || payload.token === '') {
        return (
            <div className="invalid-link">
                <h3>{t('A_36')}</h3>
                <p>{t('A_42')}</p>
                <Link to={'/account/login'} style={{ textDecoration: 'underline' }}>{t('A_43')}</Link>
            </div>
        )
    }

    return (
        <div className="form-reset-password">
            <h3>{t('A_36')}</h3>
            <p>{t('A_44', { user: payload.email })}, {t('A_48')}</p>
            {mess && <p>{t('A_49')} <Link to={'/account/login'}>{t('A_43')}.</Link></p>}
            <div className="form">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    className="my-form"
                    disabled={checked}
                >
                    <Form.Item
                        label={t('A_45')}
                        name="newpassword"
                        rules={[{ required: true, message: t('A_47'), min: 7 }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        {
                            !spin ? <Button type="ghost" htmlType="submit">
                                {t('A_46')}
                            </Button> : <SpinLoading />
                        }
                        <Link to={'/account/login'}>{t('A_35')}</Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default ResetPassword;