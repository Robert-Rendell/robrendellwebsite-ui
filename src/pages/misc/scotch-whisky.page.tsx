import React from "react";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useWindowSize } from "../../hooks/use-window-size.hook";

export function ScotchWhiskyPage() {
  const windowSize = useWindowSize();
  const width = windowSize[0] - 40;
  usePageView(SharedRoutes.Miscellaneous.ScotchWhisky);
  const onMobile = width < 600;
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{SharedText.Miscellaneous.ScotchWhisky}</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <img
              src="https://robrendellwebsite-public.s3.eu-west-1.amazonaws.com/whisky-taste-map.jpg"
              width={!onMobile ? width / 3 : width}
            />
          </div>
          <div className="col-sm centred">
            <img
              src="https://robrendellwebsite-public.s3.eu-west-1.amazonaws.com/whisky-map.jpg"
              width={!onMobile ? width / 3 : width}
            />
          </div>
        </div>
      </div>
      <hr />
      <p>Source: Edinburgh Student Union - 5th August 2018</p>
      <hr />
    </div>
  );
}
