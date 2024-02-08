import React from 'react';
import './Payment.css';

export const Payment = () => {
  let balance = 3000.788;

  return (
    <section className="Payment">
      <div className="Payment__details">
        <h2 className="Payment__text">
          Account Balance:
        </h2>

        <h2 className="Payment__amount">
          R{balance}
        </h2>

        <p className="Payment__statement">
          <a href="#" className="Payment__link">Download Full Account Statement</a>
        </p>
      </div>

      <h2 className="Payment__text">Pay Now</h2>

      <div className="Payment__option">
        Payment options icons go here
      </div>


    </section>
  );
}
