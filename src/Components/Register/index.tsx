import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input, InputNumber } from 'antd';
import { ScrollToTop } from '../../utils/ScrollSmooth';
import './style.scss';

interface RegisterAccount {
    name: string;
    username: string;
    password: string;
    email: string;
    phonenumber: string;
}
const Register = () => {
    const { t } = useTranslation();
    const onFinish = (values: RegisterAccount) => {
        console.log('Success: ', values);
    };
    useEffect(() => {
        document.title = `Phoenix | ${t('A_7')}`;
        ScrollToTop()
    }, [])
    return (
        <div className='container-register'>
            <h3>{t('A_26')}</h3>
            <p>{t('A_27')}</p>
            <div className="form">
                <Form
                    name="basic"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    autoComplete="off"
                    className="my-form"
                >
                    <Form.Item
                        label={t('A_39')}
                        name="name"
                        rules={[{ required: true, message: t('A_40') }]}
                    >
                        <Input placeholder={t('A_41')} />
                    </Form.Item>
                    <Form.Item
                        label={t('A_16')}
                        name="username"
                        rules={[{ required: true, message: t('A_20') }]}
                    >
                        <Input placeholder={t('A_33')} />
                    </Form.Item>

                    <Form.Item
                        label={'Email'}
                        name="email"
                        rules={[{ required: true, message: t('A_28') }]}
                    >
                        <Input type='email' placeholder={t('A_31')} />
                    </Form.Item>

                    <Form.Item
                        label={t('A_30')}
                        name="numberphone"
                        rules={[{ required: true, message: t('A_29') }]}
                    >
                        <InputNumber controls={false} style={{ width: '100%' }} placeholder={t('A_32')} />
                    </Form.Item>

                    <Form.Item
                        label={t('A_17')}
                        name="password"
                        rules={[{ required: true, message: t('A_47') }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 7, span: 20 }}>
                        <div className="btn-fnc-account">
                            <Button type="ghost" htmlType="submit">
                                {t('A_7')}
                            </Button>
                            <Button type="ghost">
                                <Link to={'/account/login'}>{t('A_19')}</Link>
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default Register;