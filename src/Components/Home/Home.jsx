import React from 'react';
import s from './Home.module.scss';
import homeBackground from './img/computers_bg.jpg';
import imac from '../../assets/images/imac.png';
import macbook from '../../assets/images/macbook.jpg';
import iphone from '../../assets/images/iphone.png';
import watch from '../../assets/images/watch.jpg';
import ipad from '../../assets/images/ipad.jpg';
import display from '../../assets/images/display.png';
import Product from '../Product/Product';

const Home = () => {
  return (
    <div className={s.home}>
      <img
        className={s.home__image}
        src={homeBackground}
        alt="Computer background"
      />
      <div className={s.home__row}>
        <Product
          id={12345}
          title='Apple iMac Pro 27" 3.7GHz 6-Core Processor with Turbo Boost up to 4.6GHz 2TB Storage Retina 5K Display'
          price={4999.99}
          rating={5}
          image={imac}
        />
        <Product
          id={24242342545}
          title='Apple MacBook Pro 16" 2020 MV972 + AppleCare 2.3GHz 8-Core Processor 1TB Storage AMD Radeon Pro 5500M'
          price={2799.99}
          rating={4}
          image={macbook}
        />
      </div>
      <div className={s.home__row}>
        <Product
          id={2547334534}
          title='Apple iPhone 11 Pro Max 64GB Silver'
          price={1099.99}
          rating={4}
          image={iphone}
        />
        <Product
          id={20583733}
          title='Apple Watch Series 5'
          price={399.99}
          rating={3}
          image={watch}
        />
        <Product
          id={23144465}
          title='Apple iPad Air'
          price={499.99}
          rating={5}
          image={ipad}
        />
      </div>
      <div className={s.home__row}>
        <Product
          id={37456249}
          title='Apple Pro Display XDR'
          price={5999.99}
          rating={5}
          image={display}
        />
      </div>
    </div>
  );
}

export default Home;