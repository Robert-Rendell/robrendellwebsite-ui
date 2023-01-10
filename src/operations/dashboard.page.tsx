import React, { useState } from "react";
import { IsMyIPAddressCallbackFn, IsMyIPAddressProps, useIsMyIPAddress } from "../hooks/use-is-my-ip-address.hook";
import "../pages/page.css";

export function OperationsDashboardPage() {
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const hasAccessCallback: IsMyIPAddressCallbackFn = (args: IsMyIPAddressProps) => {
    setHasAccess(args.success);
    if (args.error) {
      console.error("There was an error Rob.");
    }
  };
  useIsMyIPAddress(hasAccessCallback);
  return (
    <>
      <div className="standard-page-margins standard-page-styling">
        {hasAccess && (
          <>
            <h1>Operations Dashboard</h1>
            <a href="/">Home</a>
          </>
        )}
      </div>
    </>
  );
}
