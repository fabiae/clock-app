import { combineReducers } from '@reduxjs/toolkit'
import { appReducer } from '../services/App/AppSlice'
import { quoteReducer } from '../services/Quote/QuoteSlice'

const combineReducer = combineReducers({
  quote: quoteReducer,
  app: appReducer
})

const rootReducer = (state, action) => {
  return combineReducer(state, action)
}

export default rootReducer