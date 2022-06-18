import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { clickAreaSlice, ClickAreaState } from './features/clickArea';
import { facilitySlice } from './features/facilitySlice';
import { Facility } from './types/facilityItem.d';

export type AppState = {
  clickArea: ClickAreaState;
  FacilityList: Facility[]
};

const rootReducer = combineReducers<AppState>({
  clickArea: clickAreaSlice.reducer,
  FacilityList: facilitySlice.reducer,
});

const store = configureStore({ 
  reducer: rootReducer 
});

export default store;