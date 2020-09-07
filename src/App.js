import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Login from './pages/Login/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {
  
  const [{ user }, dispatch] = useStateValue();
  
  // useEffect
  // piece of code which runs based on a given condition
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in...
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // the user is logged out...
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
    
    return () => {
      // any cleanup operations
      unsubscribe();
    }
  }, [])
  
  console.log('User is >>> ', user);
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
