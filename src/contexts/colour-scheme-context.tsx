import React from "react";
import { createSafeContext } from "./create-safe-context";

export type RobRendellColourScheme = {
  footerBg?: string;
};
export const [useColourSchemeContext, ColourSchemeContextProvider] =
  createSafeContext<RobRendellColourScheme>("RobRendellColourScheme");

// export function RobRendellColourSchemeContext({
//   children,
// }: React.PropsWithChildren<Partial<RobRendellColourScheme>>) {
//   return (
//     <ColourSchemeContextProvider value={{ footerBg: undefined }}>
//       {children}
//     </ColourSchemeContextProvider>
//   );
// }
