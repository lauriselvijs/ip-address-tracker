import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SLICE_NAME } from "./Ip.config";
import initialState from "./Ip.initial-state";
import { Ip as IIp } from "./Ip.initial-state.d";

export const ip = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    ipReceived: (state, action: PayloadAction<IIp>) => {
      state.ip = action.payload.ip;
    },
  },
});

export const ipActions = ip.actions;
export const ipReducer = ip.reducer;
export const ipName = ip.name;
