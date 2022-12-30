import { combineReducers } from "@reduxjs/toolkit";

import {
  IpInfoApiReducer,
  IpInfoApiReducerPath,
} from "../features/IpInfo/IpInfo.slice";
import { ThemeName, ThemeReducer } from "../features/Theme/Theme.slice";

const reducers = {
  [ThemeName]: ThemeReducer,
  [IpInfoApiReducerPath]: IpInfoApiReducer,
};

export const rootReducer = combineReducers(reducers);

export default rootReducer;
