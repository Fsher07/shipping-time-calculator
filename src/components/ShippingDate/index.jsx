import React from 'react';
import './ShippingDate.css';

const ShippingDate = ({ formData }) => {
  /* if formData exists get properties*/
  const { orderDate, productNumber, productStyle } = formData || {};
  const shippingDate = new Date(orderDate);
  shippingDate.setDate(shippingDate.getDate());
  const day = shippingDate.getDay();
  console.log(day);
  /* calculate shipping time */
  switch (true) {
    case productStyle === 'cotton':
      switch (true) {
        case productNumber >= 50:
          if (day === 3 || day === 4 || day === 5) {
            shippingDate.setDate(shippingDate.getDate() + 5);
          } else if (day === 6) {
            shippingDate.setDate(shippingDate.getDate() + 4);
          } else shippingDate.setDate(shippingDate.getDate() + 3);
          break;
        default:
          if (day === 4 || day === 5) {
            shippingDate.setDate(shippingDate.getDate() + 4);
          } else if (day === 6) {
            shippingDate.setDate(shippingDate.getDate() + 3);
          } else {
            console.log('kral');
            shippingDate.setDate(shippingDate.getDate() + 2);
          }
      }
      break;
    default:
      switch (true) {
        case productNumber >= 50:
          if (day === 6) {
            shippingDate.setDate(shippingDate.getDate() + 6);
          } else if (day === 0) {
            shippingDate.setDate(shippingDate.getDate() + 5);
          } else shippingDate.setDate(shippingDate.getDate() + 7);
          break;
        default:
          if (day === 1) {
            shippingDate.setDate(shippingDate.getDate() + 4);
          } else if (day === 6) {
            shippingDate.setDate(shippingDate.getDate() + 5);
          } else shippingDate.setDate(shippingDate.getDate() + 6);
      }
  }

  const shippinDay = shippingDate.getDay();
  const month = shippingDate.toLocaleDateString('en-US', { month: 'long' });
  const date = shippingDate.getFullYear();

  return (
    <div>
      {formData ? (
        <div className="shipping-info-container">
          <p className="shipping-info">
            Your Estimated Shipping Time is
            <span className="shipping-date">
              &nbsp;
              {shippinDay} {month} {date}
            </span>
          </p>
        </div>
      ) : (
        <p className="shipping-info">
          Please enter your order information to estimate shipping date
        </p>
      )}
    </div>
  );
};

export default ShippingDate;
