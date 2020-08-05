import React from 'react';

import s from './Login.module.scss';
import amazonLogoBlack from '../../assets/images/amazon_logo_black.png';

import { Link, useHistory } from 'react-router-dom';
import Button from '../../Components/Button/Button';

const Login = () => {
  return (
    <div className={s.login}>
      <Link to='/'>
        <img className={s.login__logo}
             src={amazonLogoBlack}
             alt=""
        />
      </Link>
      <div className={s.login__container}>
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text"/>
          <h5>Password</h5>
          <input type="text"/>
          <Button className='btn btn-primary btn-block'>Sign in</Button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Privacy Notice.
        </p>
        <Button>Create your Amazon account</Button>
      </div>
    </div>
  );
}

export default Login;