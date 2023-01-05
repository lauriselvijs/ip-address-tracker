import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./Theme.config";
import initialState from "./Theme.initial-state";

export const Theme = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    themeUpdated: (state, { payload: themeName }: PayloadAction<string>) => {
      state.themeName = themeName;
    },
  },
});

export const ThemeActions = Theme.actions;
export const ThemeReducer = Theme.reducer;
export const ThemeName = Theme.name;
