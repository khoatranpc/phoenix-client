import { Carousel } from 'antd';
import React from 'react';
import { AuthProtect } from '../AuthProtect';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'var(--crs)',
};

const CarouselCPN: React.FC = () => (
  <AuthProtect>
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </AuthProtect>
);

export default CarouselCPN;