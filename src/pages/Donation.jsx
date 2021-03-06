import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Donate1 from '../components/Donate1/Donate1';
import DonateCheckout from '../components/DonateCheckout/DonateCheckout';
import DonatePayment from '../components/DonatePayment/DonatePayment';

const Donation = () => {
  return (
    <section className='Donation'>
      <Switch>
        <Route path='/Stop-climate-change/donate/checkout' component={DonateCheckout} />
        <Route path='/Stop-climate-change/donate/payment' component={DonatePayment} />
        <Route path='/Stop-climate-change/donate' exact component={Donate1} />
      </Switch>
    </section>
  );
};

export default Donation; 
