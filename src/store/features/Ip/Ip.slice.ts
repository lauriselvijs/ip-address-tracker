import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SLICE_NAME } from "./Ip.config";
import initialState from "./Ip.initial-state";
import { Ip as IIp } from "./Ip.initial-state.d";

export const Ip = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    ipReceived: (state, action: PayloadAction<IIp>) => {},
  },
});

export const IpActions = Ip.actions;
export const IpReducer = Ip.reducer;
export const IpName = Ip.name;
