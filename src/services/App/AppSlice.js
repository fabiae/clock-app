import { createSlice } from '@reduxjs/toolkit';
import asyncActions from './AppActions';

const initialState = {
  detailVisible: false,
  error: {

  },
  loading: {

  },
  status: {

  }
}

const appSlice = createSlice({
  name: "app",
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

const appActions = { ...appSlice.actions, ...asyncActions }
const appReducer = appSlice.reducer

export { appActions, appReducer };