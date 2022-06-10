import Theme from "../features/Theme";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = { theme: Theme };

export const rootReducer = combineReducers(reducers);

export default rootReducer;
