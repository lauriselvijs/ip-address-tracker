import { IContainer } from "./Container";

export interface IFontProvider {
  fontFamilyName: string;
  fontWeight: { [key: string]: string };
  children: IContainer["children"];
}
