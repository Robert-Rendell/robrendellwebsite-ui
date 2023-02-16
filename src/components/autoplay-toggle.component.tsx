import React, { useCallback } from "react";
import { Soundwave } from "react-bootstrap-icons";
import { usePreferences } from "../hooks/use-preferences.hook";

export function AutoplayToggleComponent() {
  const { preferences, savePreferences } = usePreferences();

  const toggleAutoplay = useCallback(() => {
    if (preferences) {
      savePreferences({ autoplayEnabled: !preferences.autoplayEnabled });
    }
  }, [preferences, savePreferences]);
  return (
    <div style={{ cursor: "pointer" }} onClick={toggleAutoplay}>
      {!preferences?.autoplayEnabled && (
        <>
          <span style={{ color: "grey" }}>
            <i>Enable youtube autoplay?</i>
          </span>
          <Soundwave
            size="40"
            style={{
              color: "red",
              padding: "7px",
            }}
          />
        </>
      )}
      {preferences?.autoplayEnabled && (
        <>
          <span style={{ color: "orange" }}>Disable youtube autoplay?</span>
          <Soundwave size="40" style={{ color: "white", padding: "7px" }} />
        </>
      )}
    </div>
  );
}
