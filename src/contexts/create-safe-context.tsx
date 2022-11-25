import React, { useContext } from "react";

/**
 * Creates a null-safe version of Context.
 *
 * Helps avoid subtle default value bugs that can creep in
 * when using context.
 *
 * @param name A hint to the developer which context is missing
 */
export function createSafeContext<T>(
  name: string
): [useSafeContext: () => T, ContextProvider: React.FC<{ value: T }>] {
  const safeContext = React.createContext<T | null>(null);

  function useSafeContext() {
    const value = useContext(safeContext);
    if (!value) {
      throw new Error(`No ${name} context in parent scope.`);
    }
    return value;
  }

  function ContextProvider({
    children,
    value,
  }: React.PropsWithChildren<{
    value: T;
  }>) {
    return (
      <safeContext.Provider value={value}>{children}</safeContext.Provider>
    );
  }
  return [useSafeContext, ContextProvider];
}
