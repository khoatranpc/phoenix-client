import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Carousel, Steps } from 'antd';
import { ScrollToTop } from '../../utils/ScrollSmooth';
import { img2 } from '../../Assets/img';
import CarouselCPN from '../Carousel';
import './style.scss';

const mockupSubjects = [
  {
    id: '1',
    nameSubjects: 'Sexy dance',
    linkImg: img2,
    content: 'Bộ môn Sexy Dance bắt nguồn từ “Jazz funk”, một thể loại nhảy đến từ các nước Mỹ Latinh, pha trộn giữa Hiphop và Jazz dance. Ngoài ra còn có thể hiểu Sexy Dance là Free Style – không thuộc về riêng bất cứ thể loại nhảy nào, miễn là nó có yếu tố Sexy trong đó .'
  },
  {
    id: '2',
    nameSubjects: 'Sexy dance',
    linkImg: img2,
    content: 'Bộ môn Sexy Dance bắt nguồn từ “Jazz funk”, một thể loại nhảy đến từ các nước Mỹ Latinh, pha trộn giữa Hiphop và Jazz dance. Ngoài ra còn có thể hiểu Sexy Dance là Free Style – không thuộc về riêng bất cứ thể loại nhảy nào, miễn là nó có yếu tố Sexy trong đó .'
  },
  {
    id: '3',
    nameSubjects: 'Sexy dance',
    linkImg: img2,
    content: 'Bộ môn Sexy Dance bắt nguồn từ “Jazz funk”, một thể loại nhảy đến từ các nước Mỹ Latinh, pha trộn giữa Hiphop và Jazz dance. Ngoài ra còn có thể hiểu Sexy Dance là Free Style – không thuộc về riêng bất cứ thể loại nhảy nào, miễn là nó có yếu tố Sexy trong đó .'
  },
  {
    id: '4',
    nameSubjects: 'Sexy dance',
    linkImg: img2,
    content: 'Bộ môn Sexy Dance bắt nguồn từ “Jazz funk”, một thể loại nhảy đến từ các nước Mỹ Latinh, pha trộn giữa Hiphop và Jazz dance. Ngoài ra còn có thể hiểu Sexy Dance là Free Style – không thuộc về riêng bất cứ thể loại nhảy nào, miễn là nó có yếu tố Sexy trong đó .'
  },
  {
    id: '5',
    nameSubjects: 'Sexy dance',
    linkImg: img2,
    content: 'Bộ môn Sexy Dance bắt nguồn từ “Jazz funk”, một thể loại nhảy đến từ các nước Mỹ Latinh, pha trộn giữa Hiphop và Jazz dance. Ngoài ra còn có thể hiểu Sexy Dance là Free Style – không thuộc về riêng bất cứ thể loại nhảy nào, miễn là nó có yếu tố Sexy trong đó .'
  },

]
const { Step } = Steps;
const Home = () => {
  const { t } = useTranslation();
  const refSubject = useRef(null);
  useEffect(() => {
    document.title = `Phoenix | ${t('A_51')}`
    ScrollToTop();
  }, [t])

  return (
    <div className="container-home">
      <CarouselCPN />
      <div className="introdution-about-company">
        <div className="img-intro">
          <img src={img2} alt="Phoenix" />
        </div>
        <div className="summary-intro">
          <p><strong>Xin chào! Chúng tôi là Phoenix Dance Studio</strong></p>
          <p>Phoenix Dance Studio được biết đến là một đơn vị dạy nhảy hiện đại và múa cổ trang, đương đại được thành lập vào tháng 3 năm 2020. Sau 4 tháng hoạt động với sự yêu mến của học viên tại Hà Nội, Phoenix Dance Studio đã tiếp tục phát triển cơ sở thứ 2 tại đây với mong muốn có thể đem đến sân chơi cho những bạn trẻ đam mê lĩnh vực này và mong muốn đem đến những lớp học thú vị để mọi người có thể cải thiện vóc dáng, sức khỏe của mình.</p>
          <Link to={'/introdution'}><Button type="default">{t('A_50')}</Button></Link>
        </div>
      </div>
      <div className="intro-subject-phoenix">
        <div className="title">
          <h1 className="title">{t('A_62')}</h1>
        </div>
        <div className="intro-subject">
          <div className="carousel-container">
            <Carousel autoplay ref={refSubject}>
              {mockupSubjects.map((item) => {
                return (
                  <div className="subject-item" key={item.id}>
                    <div className="img-subject">
                      <img src={item.linkImg} alt="Subject" />
                    </div>
                    <div className="content-summary">
                      <p>{item.content}</p>
                    </div>
                  </div>
                )
              })}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="summary-to-studient">
        <h1 className="title">{t('A_53')}</h1>
        <Steps progressDot direction="vertical" className="process-step">
          <Step status='finish' title={t('A_52', { step: 1 })} description={<span className="description">{t('A_58')} <Link to={'/account/register'} style={{ textDecoration: 'underline' }}>{t('A_55')}</Link></span>} />
          <Step status='finish' title={t('A_52', { step: 2 })} description={<span className="description">{t('A_59')} <Link to={'/cources'} style={{ textDecoration: 'underline' }}>{t('A_54')}</Link>, <Link to={'/teachers'} style={{ textDecoration: 'underline' }}>{t('A_4')}</Link> {t('A_57')}</span>} />
          <Step status='finish' title={t('A_52', { step: 3 })} description={<span className="description">{t('A_60')}</span>} />
        </Steps>
      </div>
    </div>
  )
}
export default Home;
