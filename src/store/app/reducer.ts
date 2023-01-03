import { combineReducers } from "@reduxjs/toolkit";
import { IpName, IpReducer } from "../features/Ip";

import { IpInfoApiReducer, IpInfoApiName } from "../features/IpInfo";
import { ThemeName, ThemeReducer } from "../features/Theme";

const reducers = {
  [ThemeName]: ThemeReducer,
  [IpInfoApiName]: IpInfoApiReducer,
  [IpName]: IpReducer,
};

export const rootReducer = combineReducers(reducers);

export default rootReducer;
