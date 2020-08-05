import React from 'react';

import s from './CheckoutProduct.module.scss';
import { useStateValue } from '../../StateProvider';
import Button from '../Button/Button';

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  
  const [{ basket }, dispatch] = useStateValue();
  
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id
    });
  };
  
  return (
    <div className={s.checkoutProduct}>
      <img src={image} alt=""/>
      <div className={s.checkoutProduct__info}>
        <p className={s.checkoutProduct__title}>{title}</p>
        <p className={s.checkoutProduct__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={s.checkoutProduct__rating}>
          {
            Array(rating).fill().map((_) => <p>&#11088;</p>)
          }
        </div>
        <Button onClick={() => removeFromBasket(id)}>Remove from basket</Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;