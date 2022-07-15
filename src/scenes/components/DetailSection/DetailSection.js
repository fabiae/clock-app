import { Divider } from 'antd';
import React from 'react';

export const DetailSection = () => {
  return (
    <div className='detail' style={{ backgroundColor: "#FFFFFFBF", height: "52%" }}>
      <div className='col-1'>
        <div className='detail-item'>
          <div className='detail-item--title'>CURRENT TIMEZONE</div>
          <div className='detail-item--content'>Europe/London</div>
        </div>
        <div className='detail-item'>
          <div className='detail-item--title'>DAY OF THE YEAR</div>
          <div className='detail-item--content'>295</div>
        </div>
      </div>
      <Divider type='vertical' style={{ height: "100%", width: 1, backgroundColor: "#303030", opacity: 0.25, marginLeft: 70, marginRight: 70 }} />
      <div className='col-2'>
        <div className='detail-item'>
          <div className='detail-item--title'>DAY OF THE WEEK</div>
          <div className='detail-item--content'>5</div>
        </div>
        <div className='detail-item'>
          <div className='detail-item--title'>WEEK NUMBER</div>
          <div className='detail-item--content'>42</div>
        </div>
      </div>
    </div>
  );
};