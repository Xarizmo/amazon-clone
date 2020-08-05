import React from 'react';

import s from './Subtotal.module.scss';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import Button from '../Button/Button';

const Subtotal = () => {
  
  const [{ basket }] = useStateValue();
  
  return (
    <div className={s.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{` ${value}`}</strong>
            </p>
            <small className={s.subtotal__gift}>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <Button className='btn btn-primary'>Proceed to Checkout</Button>
    </div>
  );
}

export default Subtotal;