// types/Types.ts

// Import combineReducers from Redux Toolkit
import { combineReducers } from '@reduxjs/toolkit';

// Import your reducers
import jobFilterReducer from '../slices/jobFilterSlice';

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;

// Combine the reducers
export const rootReducer = combineReducers({
  jobFilter: jobFilterReducer,
});
