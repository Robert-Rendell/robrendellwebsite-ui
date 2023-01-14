import React from "react";
import { LatLng } from "robrendellwebsite-common";
import { NewTabLink } from "./new-tab-link.component";

type Props = {
  ll?: LatLng;
};

export const GoogleMapLink = (props: Props) => {
  return props.ll ? (
    <NewTabLink
      href={`https://www.google.com/maps/search/${props.ll[0]},${props.ll[1]}`}
    >
      See on map
    </NewTabLink>
  ) : (
    <></>
  );
};
