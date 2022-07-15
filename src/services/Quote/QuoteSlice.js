import { createSlice } from '@reduxjs/toolkit';
import asyncActions from './QuoteActions';

const initialState = {
  error: {

  },
  loading: {

  },
  status: {

  }
}

const quoteSlice = createSlice({
  name: "quote",
  initialState: initialState,
  reducers: {
    setError(
      state,
      { payload: { key, newState } }
    ) {
      state.error[key] = newState;
    },

    setLoading(
      state,
      { payload: { key, newState } }
    ) {
      state.loading[key] = newState;
    },

    setStatus(
      state,
      { payload: { key, newState } }
    ) {
      state.status[key] = newState;
    },


    setState(state, { payload: { key, newState }}) {
      state[key] = newState
    }

  }
});

const quoteActions = { ...quoteSlice.actions, ...asyncActions }
const quoteReducer = quoteSlice.reducer

export { quoteActions, quoteReducer };