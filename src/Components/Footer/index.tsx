import React from 'react';
import { YoutubeFilled, FacebookFilled, InstagramOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { useTranslation } from 'react-i18next';
import './style.scss';

const dataInf = [
  {
    key: 'Tầng 6 - số 75 Xã Đàn - Đống Đa - HN'
  },
  {
    key: 'Tầng 2 - số 8 Thọ Tháp - Cầu Giấy - HN'
  },
  {
    key: 'Tầng 8 - số 302 Nguyễn Trãi Hà Đông (gần ĐHHN) - HN'
  },
  {
    key: 'Tầng 3 - số 84 Mai Hắc Đế Hai Bà Trưng - HN'
  }
]
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="container-footer">
      <div className="footer-page">
        <div className="item left-footer">
          <h3 className="title">{t('A_10')}</h3>
          {dataInf.map((item, idx) => {
            return (<span key={`${item.key}`}>{t('A_11', { no: idx + 1, csPlace: item.key })}</span>)
          })}
        </div>
        <div className="item middle-footer">
          <h3 className="title">{t('A_12')}</h3>
          <span>Email: domanhtruong4991@gmail.com</span>
          <span>{t('A_13')}: 098 420 67 95</span>
        </div>
        <div className="item right-footer">
          <Space>
            <a href={process.env.REACT_APP_LINK_FB} target="_black" className="fb">
              <FacebookFilled className="fb" id="fb" />
              <label htmlFor="fb">Facebook</label>
            </a>
            <a href={process.env.REACT_APP_LINK_YOUTUBE} target="_black" className="yt">
              <YoutubeFilled className="yt" id="yt" />
              <label htmlFor="yt">Youtube</label>
            </a>
            <a href={process.env.REACT_APP_LINK_YOUTUBE} target="_black" className="yt">
              <InstagramOutlined className="insta" id="insta" />
              <label htmlFor="insta">Instagram</label>
            </a>
          </Space>
        </div>
      </div>
      <div className="copy-right">
        <span>{t('A_14')} <strong>Phoenix Dance Studio</strong></span>
      </div>
    </div>
  )
}
