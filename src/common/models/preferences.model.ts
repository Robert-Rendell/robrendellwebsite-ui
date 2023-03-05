import { RobRendellWebsiteModel } from "./robrendellwebsite.model";

export type Preferences = {
  autoplayEnabled?: boolean;
  sudoku?: {
    submitterName?: string;
  };
  battleships?: {
    username?: string;
    currentGameId?: string;
  };
  fullscreen?: keyof RobRendellWebsiteModel | string;
  language?: string;
};
