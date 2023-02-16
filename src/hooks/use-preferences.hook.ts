import { useCallback, useEffect, useState } from "react";
import { PREFERENCES_KEY } from "../common/constants";
import { Preferences } from "../common/models/preferences.model";

export const usePreferences = () => {
  const [preferences, setPreferences] = useState<Preferences | undefined>();
  const loadPreferences = useCallback(() => {
    let pref: Preferences = JSON.parse(
      `${localStorage.getItem(PREFERENCES_KEY)}`
    );
    if (!pref) {
      pref = {
        autoplayEnabled: true,
      };
    }
    setPreferences(pref);
  }, []);

  const savePreferences = useCallback(
    (pref: Partial<Preferences>) => {
      if (preferences) {
        const p = {
          ...preferences,
          ...pref,
        };
        setPreferences(p);
        localStorage.setItem(PREFERENCES_KEY, JSON.stringify(p));
      }
    },
    [preferences]
  );

  useEffect(() => {
    loadPreferences();
  }, [loadPreferences]);

  return { preferences, loadPreferences, savePreferences };
};
