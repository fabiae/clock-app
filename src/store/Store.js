import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { logger } from 'redux-logger'

import rootSaga from "./Sagas"
import rootReducers from './Reducers'
import { env_production } from "../@common/config/Environments"

let sagaMiddleware = createSagaMiddleware()

const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
      ignoredActionPaths: ['payload']
    },
    immutableCheck: false
  })
    .concat(sagaMiddleware)
    .concat(logger)
]

const store = configureStore({
  reducer: rootReducers,
  middleware
})

sagaMiddleware.run(rootSaga)

export default store
