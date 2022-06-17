import React from 'react';
import Layout from '../components/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Exchange from '../pages/exchange';
import Markets from '../pages/markets';
import Stake from '../pages/stake';
import StakeToken from '../pages/stakeToken';
import Profile from './profile';
import Wallet from './wallet';
import Settings from './settings';
import Login from './login';
import Reset from './reset';
import OtpVerify from './otp-verify';
import OtpNumber from './otp-number';
import Lock from './lock';
import TermsAndConditions from './terms-and-conditions';
import NewsDetails from './news-details';
import Signup from './signup';
import Notfound from './notfound';

export default function index() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/trade/:pair">
            <Exchange />
          </Route>
          <Route exact path="/markets">
            <Markets />
          </Route>
          <Route exact path="/wallet">
            <Wallet />
          </Route>
          <Route exact path="/stake">
            <Stake />
          </Route>
          <Route exact path="/stake/:token">
            <StakeToken />
          </Route>
          <Route path="/notfound">
            <Notfound />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}
