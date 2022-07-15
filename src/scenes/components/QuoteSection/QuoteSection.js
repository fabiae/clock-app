import React, { useEffect } from 'react';
import { Button, Image, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import refresh from '../../../assets/desktop/icon-refresh.svg'
import { quoteActions } from '../../../services/Quote/QuoteSlice';

const { Text } = Typography

export const QuoteSection = () => {

  const dispatch = useDispatch()
  const { quote, loading } = useSelector(state => state.quote)

  const handleRefresh = () => {
    dispatch(quoteActions.getQuoteRandom())
  }

  useEffect(() => {
    if (!quote)
      dispatch(quoteActions.getQuoteRandom())
  }, [quote])

  return (
    <div className='quote'>
      <div className='quote-top'>
        <Text className='text'>“{quote?.text}”</Text>
        <Button onClick={handleRefresh} className='button-refresh' type='link'>
          <Image width={25} height={20} preview={false} src={refresh} />
        </Button>
      </div>
      <Text className='quote-author'>{quote?.author}</Text>
    </div>
  );
};