import { DefaultTheme } from "styled-components";

export interface Theme {
  name: string;
  color: Partial<DefaultTheme["color"]>;
}
