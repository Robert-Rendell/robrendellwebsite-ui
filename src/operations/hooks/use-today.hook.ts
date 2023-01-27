import { useMemo } from "react";

export function useToday() {
  return useMemo(() => {
    const d = new Date();
    return `${d.getDate().toString().padStart(2, "0")}.${(d.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${d
      .getFullYear()
      .toString()
      .slice(2)
      .padStart(2, "0")}`;
  }, []);
}
