import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { ScrollToTop } from '../../utils/ScrollSmooth';
import './style.scss';

interface UserLogin {
  username: string;
  password: string;
  remember: boolean
}
const Login = () => {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = `Phoenix | ${t('A_6')}`;
    ScrollToTop();
  }, [t])
  const onFinish = (values: UserLogin) => {
    console.log('Success: ', values);
  };

  return (
    <div className="form-login">
      <h3 className="title-form-login">{t('A_22')}</h3>
      <p>{t('A_23')}</p>
      <div className="form">
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
            label={t('A_16')}
            name="username"
            rules={[{ required: true, message: t('A_20') }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={t('A_17')}
            name="password"
            rules={[{ required: true, message: t('A_21') }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>{t('A_18')}</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              {t('A_19')}
            </Button>
          </Form.Item>
        </Form>
        <div className="right-fnc">
          <Link to={'/account/forgot-password'}>{t('A_24')}</Link>
          <br />
          <Link to={'/account/register'}>{t('A_25')}</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;