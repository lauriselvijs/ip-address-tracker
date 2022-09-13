import { combineReducers } from "@reduxjs/toolkit";
import { IpName, IpReducer } from "../features/Ip/Ip.slice";
import {
  IpInfoApiReducer,
  IpInfoApiReducerPath,
} from "../features/IpInfo/IpInfo.service";
import { ThemeName, ThemeReducer } from "../features/Theme/Theme.slice";

const reducers = {
  [ThemeName]: ThemeReducer,
  [IpInfoApiReducerPath]: IpInfoApiReducer,
  [IpName]: IpReducer,
};

export const rootReducer = combineReducers(reducers);

export default rootReducer;
