import { RobRendellWebsiteModel } from "./models/robrendellwebsite.model";

export const SharedRoutes: RobRendellWebsiteModel = {
  HomePage: "/",
  Operations: {
    Dashboard: "/operations",
    PageViews: "/operations/page-views",
    WordOfTheDay: "/operations/word-of-the-day",
    InterestingDatesInHistory: "/operations/dates-in-history",
  },
  Sudoku: {
    Dashboard: "/sudoku",
  },
  Battleships: {
    Dashboard: "/battleships",
    Play: "/battleships/play",
  },
  CustomAnalytics: {
    LandingPage: "/custom-analytics",
  },
  Miscellaneous: {
    India: "/miscellaneous/india",
    GiantPacificOctopus: "/miscellaneous/giant-pacific-octopus",
    ScotchWhisky: "/miscellaneous/scotch-whisky",
    WordOfTheDay: "/miscellaneous/word-of-the-day",
    InterestingDatesInHistory: "/miscellaneous/interesting-dates-in-history",
    Philosophy: "/miscellaneous/philosophy",
    NobelPrize: "/miscellaneous/nobel-prize",
    Midjourney: "/miscellaneous/midjourney-ai",
    JamesWebbTelescope: "/miscellaneous/james-webb-telescope",
    PaintingsAndArt: "/miscellaneous/paintings-and-art",
  },
  ClimateChange: {
    LandingPage: "/climate-change",
    CarlSagan1985: "https://www.youtube.com/watch?v=Wp-WiNXH6hI",
    Ruminants: "/climate-change/ruminants",
    OceanAcidification: "/climate-change/ocean-acidification",
    RideABike: "/climate-change/ride-a-bike",
  },
  PhotosIveTaken: {
    Nature: {
      Arachnids: "/photos-ive-taken/nature/arachnids",
      Fungi: "/photos-ive-taken/nature/fungi",
      Insects: "/photos-ive-taken/nature/insects",
      Lichen: "/photos-ive-taken/nature/lichen",
      WildFlowers: "/photos-ive-taken/nature/wild-flowers",
    },
  },
  StravaAPI: {
    Historical: "/strava-api/historical",
  },
  RobsFreeDogWalking: {
    LandingPage: "https://robs-free-dog-walks.onrender.com/",
  },
};
