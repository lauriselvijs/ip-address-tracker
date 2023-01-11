import { combineReducers } from "@reduxjs/toolkit";
import { ipName, ipReducer } from "../features/Ip";

import {
  ipLocationApiReducer,
  ipLocationApiName,
} from "../features/IpInfo/IpLocation";
import { themeName, themeReducer } from "../features/Theme";

const reducers = {
  [themeName]: themeReducer,
  [ipLocationApiName]: ipLocationApiReducer,
  [ipName]: ipReducer,
};

export const rootReducer = combineReducers(reducers);

export default rootReducer;
