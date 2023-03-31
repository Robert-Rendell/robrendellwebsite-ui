import React, { useCallback, useEffect, useRef, useState } from "react";
import "../page.css";
import { useGetHomePageImageUrls } from "./hooks/useGetHomePageImageUrls.hook";
import { FullScreenS3ImageComponent } from "../../components/full-screen-image/full-screen-image.component";
import { ImageGallery } from "../../components/image-gallery.component";
import { SharedText } from "../../common/shared-text";
import { SharedRoutes } from "../../common/shared-routes";
import { config } from "../../config";

export const HomePage = () => {
  const handleImageClickedRef = useRef();
  const [images, setImages] = useState<JSX.Element[]>([]);
  const getHomePageImageUrls = useGetHomePageImageUrls(handleImageClickedRef);

  const setHomePageImages = useCallback(
    async () =>
      getHomePageImageUrls().then((result) => setImages(result.thumbnails)),
    [getHomePageImageUrls, setImages]
  );

  useEffect(() => {
    setHomePageImages();
  }, [setHomePageImages]);

  return (
    <div className="standard-page-margins standard-page-styling">
      <h2 className="centred">Welcome to rob-rendell.co.uk</h2>
      <h3>Rob Rendell: TypeScript / Node.js Developer</h3>
      <hr />
      {!config.minimal && (
        <>
          <h5>Recent developments:</h5>
          <ul>
            <li>
              04/03/23 @ 10.08 - Begun consuming my&nbsp;
              <a href={SharedRoutes.Battleships.Dashboard}>
                {SharedText.Battleships.Dashboard}
              </a>{" "}
              REST API
            </li>
            <li>
              01/03/23 @ 19.01 - Added&nbsp;
              <a href={SharedRoutes.Miscellaneous.JamesWebbTelescope}>
                {SharedText.Miscellaneous.JamesWebbTelescope}
              </a>{" "}
              page
            </li>
            <li>
              26/02/23 @ 14.53 - Added&nbsp;
              <a href={SharedRoutes.StravaAPI.Historical}>
                {SharedText.StravaAPI.Historical}
              </a>{" "}
              page; shows my Strava 2019 - 2021 data pulled from the Strava API.
            </li>
            <li>
              12/02/23 @ 14.45 - Added&nbsp;
              <a href={SharedRoutes.Miscellaneous.NobelPrize}>
                {SharedText.Miscellaneous.NobelPrize}
              </a>{" "}
              page using <code>AWS.S3</code> and <code>api.nobelprize.org</code>
            </li>
            <li>
              04/02/23 @ 15.21 - Converted&nbsp;
              <a href={SharedRoutes.Sudoku.Dashboard}>
                {SharedText.Sudoku.Dashboard}
              </a>{" "}
              to <code>React Hooks</code> + <code>TypeScript</code>
            </li>
            <li>
              16/01/23 @ 17.53 - Added&nbsp;
              <a href={SharedRoutes.Miscellaneous.InterestingDatesInHistory}>
                {SharedText.Miscellaneous.InterestingDatesInHistory}
              </a>{" "}
              page using <code>AWS.S3</code>
            </li>
            <li>
              16/01/23 @ 17.24 - Added&nbsp;
              <a href={SharedRoutes.Miscellaneous.WordOfTheDay}>
                {SharedText.Miscellaneous.WordOfTheDay}
              </a>{" "}
              page using <code>AWS.S3</code>
            </li>
            <li>
              16/01/23 @ 17.15 - Added&nbsp;
              <a href={SharedRoutes.Miscellaneous.ScotchWhisky}>
                {SharedText.Miscellaneous.ScotchWhisky}
              </a>{" "}
              page
            </li>
            <li>
              31/12/22 @ 11.30 - Added&nbsp;
              <a href={SharedRoutes.Biomagnetism.LandingPage}>
                {SharedText.Biomagnetism.LandingPage}
              </a>{" "}
              project using my <code>AWS.DynamoDB</code> page views feature
            </li>
            <li>
              26/11/22 @ 09.35 - Added&nbsp;
              <a href="recursion/simple-equations-infinite-complexity">
                {SharedText.Recursion.SimpleEquations}
              </a>{" "}
              page using my <code>AWS.DynamoDB</code> page views feature
            </li>
            <li>
              17/11/22 @ 14.25 - Completed{" "}
              <a href="neurochemistry/">Neurochemistry</a> project using my{" "}
              <code>AWS.DynamoDB</code> page views feature
            </li>
            <li>
              11/11/22 @ 16.40 - Pinned some already played{" "}
              <a href="sudoku/">Sudokus</a> for those who are competitive
            </li>
            <li>
              03/11/22 @ 08.51 - Completed{" "}
              <a href="miscellaneous/giant-pacific-octopus">
                Giant Pacific Octopus
              </a>{" "}
              and <a href="miscellaneous/india">India</a> project
            </li>
            <li>
              30/10/22 @ 10.33 - Completed{" "}
              <a href="photos-ive-taken/nature/wild-flowers">
                My Flower Photographs
              </a>{" "}
              project (phase 1) using <code>AWS.DynamoDB</code>
            </li>
            <li>
              29/10/22 @ 13.50 - Completed{" "}
              <a href="climate-change/">Climate Change</a> project
            </li>
            <li>
              27/10/22 @ 10.30 - Added <a href="recursion/">Recursion</a>{" "}
              project using <code>P5.js</code>
            </li>
            <li>
              24/10/22 @ 15.10 - Added infinity spinner for lazy loading on
              website
            </li>
            <li>
              02/01/22 @ 17.40 - Leaderboard feature for time taken to complete{" "}
              <a href="sudoku/">Sudoku</a> using <code>AWS.DynamoDB.query</code>{" "}
              and GSI
            </li>
            <li>
              28/11/21 @ 14.00 - <code>AWS.Lambda</code> running my Python{" "}
              <a href="sudoku/">Sudoku generation</a> code; triggered by front
              end
            </li>
            <li>
              16/11/21 @ 12.45 - Enabled &apos;Validate&apos;{" "}
              <a href="sudoku/play/0/">Sudoku project</a> button
            </li>
            <li>
              15/11/21 @ 15.53 - Enabled <a href="sudoku/">Sudoku project</a>.
              It is currently using <code>AWS.DynamoDB.getItem</code>
            </li>
            <li>
              05/11/21 @ 09.15 - Home page images loading using{" "}
              <code>AWS.S3.getSignedUrlPromise</code> and{" "}
              <code>AWS.S3.listObjectsV2</code>
            </li>
          </ul>
          <hr />
        </>
      )}

      <h4>
        This website is an <u>ongoing</u> personal project using:
      </h4>
      <ul>
        <li>Node.js</li>
        <li>TypeScript (front and back end)</li>
        <li>AWS</li>
        <li>React Hooks</li>
      </ul>
      <hr />
      <p>
        Here are some of my own photos from travelling over the years{" "}
        <i>(click to enlarge)</i>:
      </p>
      <ImageGallery images={images ? images : []} />
      <FullScreenS3ImageComponent handleShowRef={handleImageClickedRef} />
    </div>
  );
};
