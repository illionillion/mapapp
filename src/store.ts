import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { clickAreaSlice, ClickAreaState } from './features/clickArea';

export type AppState = {
  clickArea: ClickAreaState;
};

const rootReducer = combineReducers<AppState>({
  clickArea: clickAreaSlice.reducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;