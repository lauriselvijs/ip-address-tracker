import { ActionCreatorWithPayload, bindActionCreators } from "@reduxjs/toolkit";
import { useEffect, useLayoutEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import { RootState } from "../store/app/store";
import { ThemeActions, ThemeName } from "../store/features/Theme";
import { useAppDispatch, useAppSelector } from "./Store.hook";

export const useSetTheme = (
  defaultTheme: DefaultTheme
): ActionCreatorWithPayload<DefaultTheme, string> => {
  const appDispatch = useAppDispatch();
  const { setTheme } = bindActionCreators(ThemeActions, appDispatch);

  const theme = useAppSelector((state: RootState) => state[ThemeName]);

  useLayoutEffect(() => {
    !theme.themeId && setTheme(defaultTheme);
  }, []);

  return setTheme;
};

export const useIfThemeSet = (themeId: string): boolean => {
  const theme = useAppSelector((state: RootState) => state[ThemeName]);
  const [themeIsSet, setThemeIsSet] = useState<boolean>(false);

  useEffect(() => {
    theme.themeId === themeId ? setThemeIsSet(true) : setThemeIsSet(false);
  }, [theme, themeId]);

  return themeIsSet;
};
