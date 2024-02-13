import { configureStore } from '@reduxjs/toolkit'
import counter from './Features/GlobalStates'
export const store = configureStore({
  reducer: {counter},
})