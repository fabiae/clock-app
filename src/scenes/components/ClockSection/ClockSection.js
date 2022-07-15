import React, { useEffect, useState } from 'react';
import { Button, Image, Typography } from 'antd'
import sun from '../../../assets/desktop/icon-sun.svg'
import moon from '../../../assets/desktop/icon-moon.svg'
import more from '../../../assets/desktop/icon-arrow-down.svg'
import less from '../../../assets/tablet/up.png'
import { useDispatch, useSelector } from 'react-redux';
import { appActions } from '../../../services/App/AppSlice';
import axios from 'axios';
import moment from 'moment';

const { Text } = Typography

export const ClockSection = () => {

  const dispatch = useDispatch()
  const { detailVisible, worldTime, ipBase } = useSelector(state => state.app)
  const [textSchedule, setTextSchedule] = useState()
  const [hour, setHour] = useState()

  const handleMoreLess = () => {
    dispatch(appActions.setState({ key: 'detailVisible', newState: !detailVisible }))
  }

  useEffect(() => {
    if (worldTime) {
      let hour = moment(worldTime?.datetime).get("hour")
      setHour(hour)
    }
  }, [worldTime])

  useEffect(() => {
    if (hour) {
      if (hour >= 5 && hour < 12) {
        setTextSchedule("GOOD MORNING")
      } else if (hour >= 12 && hour < 18) {
        setTextSchedule("GOOD AFTERNOON")
      } else if (hour >= 18 && hour < 5) {
        setTextSchedule("GOOD EVENING")
      }
    }
  }, [hour])

  return (
    <div className='clock'>
      <div className='clock-salute'>
        <Image width={25} preview={false} src={worldTime?.schedule === "day" ? sun : moon} />
        <Text className='text'>{textSchedule}, IT’S CURRENTLY</Text>
      </div>
      <div className='clock-hour'>
        <Text className='clock-hour--first'>{moment(worldTime?.datetime).format("HH:mm")}</Text>
        <Text className='clock-hour--second'>{ipBase?.code}</Text>
      </div>
      <div className='clock-location'>
        <Text className='clock-location--text'>IN {ipBase?.city.toUpperCase()}, {ipBase?.country}</Text>
        <Button onClick={handleMoreLess} type='link' className='clock-location--button'>
          <Text className='text'>{detailVisible ? "LESS" : "MORE"}</Text>
          <Image className='icon' preview={false} src={detailVisible ? less : more} />
        </Button>
      </div>
    </div>
  );
};