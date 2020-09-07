import React, { useState } from 'react';

import s from './Login.module.scss';
import amazonLogoBlack from '../../assets/images/amazon_logo_black.png';

import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

import Button from '../../Components/Button/Button';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const login = (e) => {
    e.preventDefault();
    
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in, redirect to homepage
        history.push('/');
      })
      .catch(e => alert(e.message));
  }
  
  const register = (e) => {
    e.preventDefault();
    // do the register logic
    
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created a user and logged in, redirect to homepage
        history.push('/');
      })
      .catch(e => alert(e.message));
  }
  
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
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            className='btn btn-primary btn-block'
            onClick={login}
          >Sign in</Button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Privacy Notice.
        </p>
        <Button onClick={register}>Create your Amazon account</Button>
      </div>
    </div>
  );
}

export default Login;