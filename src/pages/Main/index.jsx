import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsCalendar4 } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { AiFillInfoCircle } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai';
import ShippingDate from '../../components/ShippingDate';
import './Main.css';

const Main = () => {
  const [typeData, setTypeData] = useState(false);
  const [formData, setFormData] = useState(null);
  const handleTypeData = () => {
    setTypeData(!typeData);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();
  const onSubmit = (data) => {
    setFormData(data);
  };
  const date = new Date();
  const today =
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  return (
    <div className="container">
      <div className="contents">
        <h1 className="first-title">The Company</h1>
        <h2 className="second-title">Shipping Time Calculator</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div
            onFocus={handleTypeData}
            onBlur={handleTypeData}
            className="form-group"
          >
            <input
              className="border-ellipse"
              id="datepicker"
              placeholder="Order Date"
              type={typeData ? 'date' : 'text'}
              defaultValue="Order Date"
              min={today}
              {...register('orderDate', {
                required: 'Please Fill All Information Correctly',
              })}
            />
            <BsCalendar4
              className="calendar-icon"
              color={typeData ? 'black' : '#8D9092'}
            />
          </div>
          <div className="form-group">
            <select
              defaultValue={0}
              className="border-ellipse"
              name=""
              id="productstyle"
              {...register('productStyle', {
                required: 'Please Fill All Information Correctly',
              })}
            >
              <option value="0" disabled>
                Fabric Type
              </option>
              <option value="cotton">Cotton</option>
              <option value="linen">Linen</option>
            </select>
            <IoIosArrowDown className="arrow-icon" />
          </div>
          <div className="form-group">
            <input
              className="border-ellipse"
              type="number"
              placeholder="Quantity"
              min="1"
              max="100"
              id="productnumber"
              {...register('productNumber', {
                required: 'Please Fill All Information Correctly',
              })}
            />
            <AiFillInfoCircle className="info-icon" />
            <p className="info-text">
              Shipping Dates May Vary Based on Quantity
            </p>
          </div>
          <div className="form-group btn-field">
            <input
              className="border-ellipse"
              type="submit"
              id="submit-button"
              value="Calculate"
            />
          </div>
          <div>
            {errors.orderDate && (
              <div className="error-box">
                <div className="error-container">
                  <p className="error-message">{errors.orderDate.message}</p>
                  <AiFillCloseCircle className="error-close-icon" />
                </div>
              </div>
            )}
            {errors.productStyle && (
              <div className="error-box">
                <div className="error-container">
                  <p className="error-message">{errors.productStyle.message}</p>
                  <AiFillCloseCircle className="error-close-icon" />
                </div>
              </div>
            )}
            {errors.productNumber && (
              <div className="error-box">
                <div className="error-container">
                  <p className="error-message">
                    {errors.productNumber.message}
                  </p>
                  <AiFillCloseCircle
                    type="button"
                    className="error-close-icon"
                    onClick={() => clearErrors()}
                  />
                </div>
              </div>
            )}
          </div>
        </form>
        <ShippingDate formData={formData} />
      </div>
      <div className="splash"></div>
    </div>
  );
};

export default Main;
