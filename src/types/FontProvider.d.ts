import { ReactElement } from "react";

export interface IFontProvider {
  fontFamilyName: string;
  fontWeight: { [key: string]: string };
  children: ReactElement | ReactElement[];
}
