import React from 'react';
import { Carousel } from 'antd';
import { img1, img2, img3, img4, total } from '../../Assets/img';
import './style.scss';

const CarouselCPN: React.FC = () => (
  <div className="container-carousel">
    <Carousel autoplay>
      <div className="img-carousel">
        <img src={total} alt="phoenix" />
      </div>
      <div className="img-carousel">
        <img src={img1} alt="phoenix" />
      </div>
      <div className="img-carousel">
        <img src={img2} alt="phoenix" />
      </div>
      <div className="img-carousel">
        <img src={img3} alt="phoenix" />
      </div>
      <div className="img-carousel">
        <img src={img4} alt="phoenix" />
      </div>
    </Carousel>
  </div>
);

export default CarouselCPN;