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
    render: (name: string) => <span className='currency-name'>{name}</span>,
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
  const currenciesData = useSelector(getCurrencies);
  const isLoading = useSelector(getCurrenciesIsLoading);
  
  useEffect(() => {
    if (!currenciesData) {
      dispatch(getCurrenciesThunkCreator());
    } else if (new Date().getDate() !== new Date(currenciesData.currentDate).getDate()) {
      dispatch(getCurrenciesThunkCreator());
    }
  }, [currenciesData]);

  return (
    <div className='currencies-container'>
      {
        isLoading ?
        <Spin size='large' /> :
        !currenciesData.currencies ?
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
            dataSource={currenciesData.currencies || []}
            pagination={false}
            scroll={{ x: 480 }}
          />
        </div>
      }
    </div>
  );
}