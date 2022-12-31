import React, { useCallback, useEffect, useRef, useState } from "react";
import "../page.css";
import { useGetHomePageImageUrls } from "./hooks/useGetHomePageImageUrls.hook";
import { FullScreenS3ImageComponent } from "../../components/full-screen-image.component";
import { ImageGallery } from "../../components/image-gallery.component";
import { SharedText } from "../../common/shared-text";
import { SharedRoutes } from "../../common/shared-routes";

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
      <h3>Rob Rendell: Node.js / TypeScript Developer</h3>
      <h4>Recent developments:</h4>
      <ul>
        <li>
          31/12/22 @ 11.30 - Added&nbsp;
          <a href={SharedRoutes.Biomagnetism.LandingPage}>
            {SharedText.Biomagnetism.LandingPage}
          </a>{" "}
          page
        </li>
        <li>
          26/11/22 @ 09.35 - Added&nbsp;
          <a href="recursion/simple-equations-infinite-complexity">
            {SharedText.Recursion.SimpleEquations}
          </a>{" "}
          page
        </li>
        <li>
          21/11/22 @ 18.00 - Style makeover for{" "}
          <a href="neurochemistry/">Neurochemistry</a> project
        </li>
        <li>
          17/11/22 @ 14.25 - Completed{" "}
          <a href="neurochemistry/">Neurochemistry</a> project
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
          project (phase 1)
        </li>
        <li>
          29/10/22 @ 13.50 - Completed{" "}
          <a href="climate-change/">Climate Change</a> project
        </li>
        <li>
          27/10/22 @ 10.30 - Added <a href="recursion/">Recursion</a> project
        </li>
        <li>
          24/10/22 @ 15.10 - Added infinity spinner for lazy loading on website
        </li>
        <li>
          02/01/22 @ 17.40 - Leaderboard feature for time taken to complete{" "}
          <a href="sudoku/">Sudoku</a> using <code>AWS.DynamoDB.query</code> and
          GSI.
        </li>
        <li>
          28/11/21 @ 14.00 - AWS Lambda running my Python{" "}
          <a href="sudoku/">Sudoku generation</a> code; triggered by front end.
        </li>
        <li>
          16/11/21 @ 12.45 - Enabled &apos;Validate&apos;{" "}
          <a href="sudoku/play/0/">Sudoku project</a> button.
        </li>
        <li>
          15/11/21 @ 15.53 - Enabled <a href="sudoku/">Sudoku project</a>. It is
          currently using <code>AWS.DynamoDB.getItem</code>
        </li>
        <li>
          05/11/21 @ 09.15 - Home page images loading using{" "}
          <code>AWS.S3.getSignedUrlPromise</code> and{" "}
          <code>AWS.S3.listObjectsV2</code>
        </li>
      </ul>
      <hr />
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
