import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ClickAreaState = {
  id: number;
};

const initialState: ClickAreaState = { id: 0 };

export const clickAreaSlice = createSlice({
  name: "clickArea",
  initialState,
  reducers: {
    setClickArea: (state, action: PayloadAction<ClickAreaState>) => {
      return { ...state, id: action.payload.id };
    },
  },
});
