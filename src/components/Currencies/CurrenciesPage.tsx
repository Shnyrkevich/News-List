import React, { useEffect } from 'react';
import './currencyPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencies, getCurrenciesIsLoading } from '../../store/selectors/currencies-page-selectors';
import { getCurrenciesThunkCreator } from '../../store/thunks/currencies-thunk';
import { Result, Spin } from 'antd';

export default function CurrenciesPage() {
  const dispatch = useDispatch();
  const currencies = useSelector(getCurrencies);
  const isLoading = useSelector(getCurrenciesIsLoading);
  console.log(currencies);
  useEffect(() => {
    if (!currencies) {
      dispatch(getCurrenciesThunkCreator());
    }
  });

  return (
    <div className='currencies-container'>
      {
        isLoading ?
        <Spin size="large" /> :
        currencies && !currencies.length ?
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
        /> :
        'lol'
      }
    </div>
  );
}