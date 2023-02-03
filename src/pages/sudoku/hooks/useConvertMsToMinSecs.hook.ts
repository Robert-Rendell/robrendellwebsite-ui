import { useCallback } from "react";

export function useConvertMsToMinsSecs() {
  return useCallback((ms: number) => {
    const rounded = Math.round(ms / 1000);
    if (rounded < 60) {
      return `${rounded} secs`;
    }
    const minutes = Math.floor(rounded / 60);
    const seconds = (rounded / 60 - minutes) * 60;
    return `${minutes} min ${seconds.toFixed(0)} secs`;
  }, []);
}
