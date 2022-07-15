import React from 'react';
import { Button, Image, Typography } from 'antd'
import refresh from '../../../assets/desktop/icon-refresh.svg'

const { Text } = Typography

export const QuoteSection = () => {
  return (
    <div className='quote'>
      <div className='quote-top'>
        <Text className='text'>“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</Text>
        <Button className='button-refresh' type='link'>
          <Image width={25} height={20} preview={false} src={refresh} />
        </Button>
      </div>
      <Text className='quote-author'>Ada Lovelace</Text>
    </div>
  );
};