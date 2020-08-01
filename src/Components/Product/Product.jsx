import React from 'react';
import s from './Product.module.scss';

const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className={s.product}>
      <div className={s.product__info}>
        <p>{title}</p>
        <p className={s.product__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={s.product__rating}>
          {
            Array(rating).fill().map((_) => <p>&#11088;</p>)
          }
        </div>
      </div>
      
      <img src={image} alt=""/>
      <button>Add to basket</button>
    </div>
  );
}

export default Product;