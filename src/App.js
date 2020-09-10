import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe('pk_test_51HPvY9BTGrHv72vRd1tJQatTmlL7c93Sb6wYhCyinR8ivLLWtffkXTR47oyJKhSAOjiItPGXHKmi8KbDKA4e3LxI00VchMuRQV');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run when app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>>", authUser);

      if(authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })


      }else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM convention

    <Router>
      <div className="app">
      <Switch>
        <Route path="/login"> 
          <Login />
        </Route>
        <Route path="/checkout"> 
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment"> 
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
