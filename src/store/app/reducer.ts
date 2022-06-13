import { combineReducers } from "@reduxjs/toolkit";
import { IpApiReducer, IpApiReducerPath } from "../features/Ip/Ip.service";
import {
  IpInfoApiReducer,
  IpInfoApiReducerPath,
} from "../features/IpInfo/IpInfo.service";
import { ThemeName, ThemeReducer } from "../features/Theme/Theme.slice";

const reducers = {
  [ThemeName]: ThemeReducer,
  [IpApiReducerPath]: IpApiReducer,
  [IpInfoApiReducerPath]: IpInfoApiReducer,
};

export const rootReducer = combineReducers(reducers);

export default rootReducer;
