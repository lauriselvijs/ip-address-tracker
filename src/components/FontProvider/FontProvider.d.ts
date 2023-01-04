import { Container } from "../../types/Container";

export interface FontProviderProps {
  fontFamilyName: string;
  fontWeight: { [key: string]: string };
  children: Container["children"];
}
