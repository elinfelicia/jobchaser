import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './types/Types';

export const store = configureStore({
  reducer: rootReducer,
});
