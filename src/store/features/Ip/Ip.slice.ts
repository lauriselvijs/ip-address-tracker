import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IP_SLICE_NAME } from "./Ip.const";
import initialState from "./Ip.initial-state";

export const Ip = createSlice({
  name: IP_SLICE_NAME,
  initialState,
  reducers: {
    setIp: (state, action: PayloadAction<string>) => {
      state.ip = action.payload;
      state.ipFetch = false;
    },
    setIpFetch: (state) => {
      state.ipFetch = true;
    },
  },
});

export const IpActions = Ip.actions;
export const IpReducer = Ip.reducer;
export const IpName = Ip.name;
