import React from 'react';
import { Button, Image, Typography } from 'antd'
import sun from '../../../assets/desktop/icon-sun.svg'
import more from '../../../assets/desktop/icon-arrow-down.svg'
import less from '../../../assets/tablet/up.png'
import { useDispatch, useSelector } from 'react-redux';
import { appActions } from '../../../services/App/AppSlice';

const { Text } = Typography

export const ClockSection = () => {

  const dispatch = useDispatch()
  const { detailVisible } = useSelector(state => state.app)

  const handleMoreLess = () => {
    dispatch(appActions.setState({ key: 'detailVisible', newState: !detailVisible }))
  }

  return (
    <div className='clock'>
      <div className='clock-salute'>
        <Image width={25} preview={false} src={sun} />
        <Text className='text'>GOOD MORNING, IT’S CURRENTLY</Text>
      </div>
      <div className='clock-hour'>
        <Text className='clock-hour--first'>11:37</Text>
        <Text className='clock-hour--second'>BST</Text>
      </div>
      <div className='clock-location'>
        <Text className='clock-location--text'>IN LONDON, UK</Text>
        <Button onClick={handleMoreLess} type='link' className='clock-location--button'>
          <Text className='text'>{detailVisible ? "LESS" : "MORE"}</Text>
          <Image className='icon' preview={false} src={detailVisible ? less : more} />
        </Button>
      </div>
    </div>
  );
};