import React, { useEffect } from 'react';
import './currencyPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencies, getCurrenciesIsLoading } from '../../store/selectors/currencies-page-selectors';
import { getCurrenciesThunkCreator } from '../../store/thunks/currencies-thunk';
import { Result, Spin, Table, Typography} from 'antd';

const columns = [
  {
    title: 'Currency name',
    dataIndex: 'Cur_Name',
    key: 'Cur_Name',
    fixed: true,
  },
  {
    title: 'Scale',
    dataIndex: 'Cur_Scale',
    key: 'Cur_Scale',
  },
  {
    title: 'Abbreviation',
    dataIndex: 'Cur_Abbreviation',
    key: 'Cur_Abbreviation',
  },
  {
    title: 'Rate (BYN)',
    dataIndex: 'Cur_OfficialRate',
    key: 'Cur_OfficialRate',
  },
];

export default function CurrenciesPage() {
  const dispatch = useDispatch();
  const currencies = useSelector(getCurrencies);
  const isLoading = useSelector(getCurrenciesIsLoading);
  
  useEffect(() => {
    if (!currencies) {
      dispatch(getCurrenciesThunkCreator());
    }
  });

  return (
    <div className='currencies-container'>
      {
        isLoading ?
        <Spin size='large' /> :
        currencies && !currencies.length ?
        <Result
          status='500'
          title='500'
          subTitle='Sorry, something went wrong.'
        /> :
        <div className='currencies-container-currencies'>
          <Typography.Title level={3}>
            {`Exchange rates of the Belarusian ruble on ${new Date().toString().split(' ').slice(1, 4).join(' ')}`}
          </Typography.Title>
          <Table 
            columns={columns}
            dataSource={currencies || []}
            pagination={false}
            scroll={{ x: 480 }}
          />
        </div>
      }
    </div>
  );
}