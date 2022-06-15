import { ActionCreatorWithPayload, bindActionCreators } from "@reduxjs/toolkit";
import { useEffect, useLayoutEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import { RootState } from "../store/app/store";
import { ThemeActions, ThemeName } from "../store/features/Theme/Theme.slice";
import { useAppDispatch, useAppSelector } from "./Store.hook";

export const useSetTheme = (
  defaultTheme: DefaultTheme
): [boolean, ActionCreatorWithPayload<DefaultTheme, string>] => {
  const appDispatch = useAppDispatch();
  const { setTheme } = bindActionCreators(ThemeActions, appDispatch);

  const theme = useAppSelector((state: RootState) => state[ThemeName]);

  const [isThemeSet, setIsThemeSet] = useState<boolean>(false);

  useLayoutEffect(() => {
    !theme.themeId && setTheme(defaultTheme);
  }, []);

  useEffect(() => {
    setIsThemeSet(!isThemeSet);
  }, [theme]);

  return [isThemeSet, setTheme];
};
