import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { SpinLoading } from '../SpinLoading';
import { validateEmail as checkValidEmail } from '../../utils/validation';
import './style.scss';

interface ForgotPasswordValidate {
    email: string;
}
const ForgotPassword = () => {
    const { t } = useTranslation();
    const [validateEmail, setValidateEmail] = useState<string>('');
    const [spin, setSpin] = useState<boolean>(false);
    const onFinish = (values: ForgotPasswordValidate) => {
        console.log('Success: ', values);
        setSpin(true)
        const id = setTimeout(() => {
            setValidateEmail((prev: string) => {
                if (checkValidEmail(values.email)) {
                    return values.email
                }
                return prev
            })
            clearTimeout(id)
        }, 1000)
    };
    return (
        <div className="form-forgotpassword">
            <h3>{t('A_36')}</h3>
            {validateEmail !== '' ? (
                <p>{t('A_37')}&nbsp;
                    <strong style={{ textDecoration: 'underline' }}>{validateEmail}</strong>
                    <br />
                    <Button type="link" style={{ marginRight: 10 }} onClick={() => {
                        setValidateEmail('')
                        setSpin(false)
                    }}>Back Again</Button>
                    <Link to={'/account/login'} style={{ textDecoration: 'underline' }}>{t('A_38')}</Link>
                </p>
            ) : <div className="form">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    className="my-form"
                >
                    <Form.Item
                        label={'Email'}
                        name="email"
                        rules={[{ required: true, message: t('A_31') }]}
                    >
                        <Input type='email' placeholder='example@gmail.com' />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        {
                            !spin ? <Button type="ghost" htmlType="submit">
                                {t('A_34')}
                            </Button> : <SpinLoading />
                        }

                        <Link to={'/account/login'}>{t('A_35')}</Link>
                    </Form.Item>
                </Form>
                <div className="right-fnc">
                    <Link to={'/account/forgot-password'}>{t('A_24')}</Link>
                    <br />
                    <Link to={'/account/register'}>{t('A_25')}</Link>
                </div>
            </div>}

        </div>
    )
}
export default ForgotPassword;