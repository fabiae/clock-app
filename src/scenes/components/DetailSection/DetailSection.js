import { Divider } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

export const DetailSection = () => {

  const { worldTime } = useSelector(state => state.app)

  return (
    <div className='detail' style={{ backgroundColor: worldTime?.schedule === "day" ? "#FFFFFFBF" : "rgba(0, 0, 0, 0.92)", height: "52%" }}>
      <div className='col-1'>
        <div className='detail-item'>
          <div style={{ color: worldTime?.schedule === "day" ? "#303030" : "#FFFFFF" }} className='detail-item--title'>CURRENT TIMEZONE</div>
          <div style={{ color: worldTime?.schedule === "day" ? "#303030" : "#FFFFFF" }} className='detail-item--content'>{worldTime?.timezone}</div>
        </div>
        <div className='detail-item'>
          <div style={{ color: worldTime?.schedule === "day" ? "#303030" : "#FFFFFF" }} className='detail-item--title'>DAY OF THE YEAR</div>
          <div style={{ color: worldTime?.schedule === "day" ? "#303030" : "#FFFFFF" }} className='detail-item--content'>{worldTime?.dayOfYear}</div>
        </div>
      </div>
      <Divider type='vertical' style={{ height: "100%", width: 1, backgroundColor: "#303030", opacity: 0.25, marginLeft: 70, marginRight: 70 }} />
      <div className='col-2'>
        <div className='detail-item'>
          <div style={{ color: worldTime?.schedule === "day" ? "#303030" : "#FFFFFF" }} className='detail-item--title'>DAY OF THE WEEK</div>
          <div style={{ color: worldTime?.schedule === "day" ? "#303030" : "#FFFFFF" }} className='detail-item--content'>{worldTime?.dayOfWeek}</div>
        </div>
        <div className='detail-item'>
          <div style={{ color: worldTime?.schedule === "day" ? "#303030" : "#FFFFFF" }} className='detail-item--title'>WEEK NUMBER</div>
          <div style={{ color: worldTime?.schedule === "day" ? "#303030" : "#FFFFFF" }} className='detail-item--content'>{worldTime?.weekNumber}</div>
        </div>
      </div>
    </div>
  );
};