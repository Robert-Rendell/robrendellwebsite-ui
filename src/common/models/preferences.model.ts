import { RobRendellWebsiteModel } from "./robrendellwebsite.model";

export type Preferences = {
  autoplayEnabled?: boolean;
  sudoku?: {
    submitterName?: string;
  };
  fullscreen?: keyof RobRendellWebsiteModel | string;
  language?: string;
};
