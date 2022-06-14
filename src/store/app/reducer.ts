import { combineReducers } from "@reduxjs/toolkit";
import { IpApiReducer, IpApiReducerPath } from "../features/Ip/Ip.service";
import { IpName, IpReducer } from "../features/Ip/Ip.slice";
import {
  IpInfoApiReducer,
  IpInfoApiReducerPath,
} from "../features/IpInfo/IpInfo.service";
import { ThemeName, ThemeReducer } from "../features/Theme/Theme.slice";

const reducers = {
  [ThemeName]: ThemeReducer,
  [IpApiReducerPath]: IpApiReducer,
  [IpInfoApiReducerPath]: IpInfoApiReducer,
  [IpName]: IpReducer,
};

export const rootReducer = combineReducers(reducers);

export default rootReducer;
