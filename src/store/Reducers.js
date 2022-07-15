import { combineReducers } from '@reduxjs/toolkit'
import { quoteReducer } from '../services/Quote/QuoteSlice'

const combineReducer = combineReducers({
  quote: quoteReducer
})

const rootReducer = (state, action) => {
  return combineReducer(state, action)
}

export default rootReducer