import { RobRendellWebsiteModel } from "./robrendellwebsite.model";

export type Preferences = {
  autoplayEnabled?: boolean;
  sudoku?: {
    name?: string;
  };
  fullscreen?: keyof RobRendellWebsiteModel | string;
  language?: string;
};
