import React from 'react';
import s from './Product.module.scss';
import { useStateValue } from '../../StateProvider';
import Button from '../Button/Button';

const Product = ({ id, title, image, price, rating }) => {
  
  const [{}, dispatch] = useStateValue();
  
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  
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
      <Button className='btn btn-primary' onClick={addToBasket}>Add to basket</Button>
    </div>
  );
}

export default Product;