import React, { useEffect, useState } from 'react';
import './sort-button.css';
import { Button } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { actionCreator } from '../../store/actions';

export default function SortByDateButton() {
  const dispatch = useDispatch();
  const [sortStatus, setSortStatus] = useState(0);

  useEffect(() => {
    dispatch(actionCreator().changeSortByDateStatus(sortStatus));
  }, [sortStatus])

  function buttonClick(): void {
    switch(sortStatus) {
      case 0:
        setSortStatus(1);
        break;
      case 1:
        setSortStatus(-1);
        break;
      case -1:
        setSortStatus(0);
        break;
    }
  }

  return (
    <Button
      size='middle'
      className='sort-date-button'
      onClick={() => buttonClick()}
    >
      Sort by Date
      <div className='sort-date-buton_icons-container'>
        <CaretUpOutlined className={ sortStatus === 1 ? 'active-icon' : '' } />
        <CaretDownOutlined className={ sortStatus === -1 ? 'active-icon' : '' } />
      </div>
    </Button>
  );
}

