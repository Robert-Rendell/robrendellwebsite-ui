import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";
import { useNobelPrize } from "./hooks/useNobelPrize.hook";

export function NobelPrizePage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Miscellaneous.NobelPrize);
  const [nobelPrize] = useNobelPrize();
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{SharedText.Miscellaneous.NobelPrize}</h1>
      {JSON.stringify(nobelPrize, null, 2)}
      <hr />
    </div>
  );
}
