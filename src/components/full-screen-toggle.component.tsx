import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import { ArrowsFullscreen, FullscreenExit } from "react-bootstrap-icons";
import { usePreferences } from "../hooks/use-preferences.hook";

export type Props = {
  path: string;
};
export function FullScreenToggleComponent(props: Props) {
  const { preferences, savePreferences } = usePreferences();
  const toggleFullScreen = useCallback(() => {
    if (
      confirm("Warning! Changing to fullscreen mode will reset your progress.")
    ) {
      const isFullScreen = preferences?.fullscreen;
      savePreferences({
        fullscreen: !isFullScreen ? props.path : "",
      });
      window.location.href = `${window.location.href}`;
    }
  }, [preferences?.fullscreen, props.path, savePreferences]);
  return (
    <>
      <Button onClick={toggleFullScreen}>
        {preferences?.fullscreen ? <FullscreenExit /> : <ArrowsFullscreen />}
      </Button>
    </>
  );
}
