import React from 'react';

import s from './Checkout.module.scss';
import banner from '../../assets/images/checkout_banner.jpg';

import { useStateValue } from '../../StateProvider';

import CheckoutProduct from '../../Components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../Components/Subtotal/Subtotal';

const Checkout = () => {
  const [{ basket }] = useStateValue();
  
  return (
    <div className={s.checkout}>
      <div className={s.checkout__left}>
        <img
          className={s.checkout__ad}
          src={banner}
          alt="Checkout banner"
        />
        {basket?.length === 0
          ? (
            <div>
              <h2 className={s.checkout__title}>
                Your Shopping Basket is empty
              </h2>
              <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
            </div>
          )
          : (
            <div>
              <h2 className={s.checkout__title}>Your Shopping Basket</h2>
              {basket.map(i => (
                <CheckoutProduct
                  id={i.id}
                  title={i.title}
                  image={i.image}
                  price={i.price}
                  rating={i.rating}
                />
              ))}
            </div>
          )
        }
      </div>
      {
        basket.length > 0 && (
          <div className={s.checkout__right}>
            <Subtotal />
          </div>
        )
      }
    </div>
  );
}

export default Checkout;