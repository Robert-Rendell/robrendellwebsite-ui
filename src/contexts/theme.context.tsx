// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import React from "react";
// import { createSafeContext } from "./create-safe-context";

// export type RobRendellColourScheme = {
//   footerBg?: string;
// };
// export const [useColourSchemeContext, ColourSchemeContextProvider] =
//   createSafeContext<RobRendellColourScheme>("RobRendellColourScheme");

// export function RobRendellColourSchemeContext({
//   children,
// }: React.PropsWithChildren<Partial<RobRendellColourScheme>>) {
//   return (
//     <ColourSchemeContextProvider value={{ footerBg: undefined }}>
//       {children}
//     </ColourSchemeContextProvider>
//   );
// }

import React from "react";
import { createContext } from "react";

export const Themes = {
  default: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  matrix: {
    foreground: "#ffffff",
    background: "black",
  },
};

export const ThemeContext = createContext({
  theme: Themes.default,
});
