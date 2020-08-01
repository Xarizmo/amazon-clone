import React from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../StateProvider';

const Header = () => {
  const [{ basket }] = useStateValue();
  
  return (
    <nav className={s.header}>
      <Link to='/'>
        <img
          className={s.header__logo}
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt="Amazon logo"/>
      </Link>
      <div className={s.header__search}>
        <input type="text" className={s.header__searchInput}/>
        <SearchIcon className={s.header__searchIcon}/>
      </div>
      <div className={s.header__nav}>
        <Link to='/login' className={s.header__link}>
          <div className={s.header__option}>
            <span className={s['header__option--lineOne']}>Hello, Kitty!</span>
            <span className={s['header__option--lineTwo']}>Sign In</span>
          </div>
        </Link>
        <Link to='/' className={s.header__link}>
          <div className={s.header__option}>
            <span className={s['header__option--lineOne']}>Returns</span>
            <span className={s['header__option--lineTwo']}>& Orders</span>
          </div>
        </Link>
        <Link to='/' className={s.header__link}>
          <div className={s.header__option}>
            <span className={s['header__option--lineOne']}>Your</span>
            <span className={s['header__option--lineTwo']}>Prime</span>
          </div>
        </Link>
        <Link to='/checkout' className={s.header__link}>
          <div className={s['header__option--basket']}>
            <ShoppingBasketIcon/>
            <span className={`${s['header__option--lineTwo']} ${s['header__basketCount']}`}>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;