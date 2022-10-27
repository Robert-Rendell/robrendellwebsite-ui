import React, { useEffect } from 'react';
import '../page.css';
import InfinitySpinner from '../../resources/infinity-spinner.svg';
import { useGetHomePageImageUrls } from './hooks/useGetHomePageImageUrls.hook';

export const HomePage = () => {
  let initialised = false;

  const getHomePageImageUrls = useGetHomePageImageUrls();

  useEffect(() => {
    if (!initialised) {
      getHomePageImageUrls();
      initialised = true;
    }
  }, [initialised])

  return (
    <div className="standard-page-margins standard-page-styling">
      <h2 className="centred">Welcome to rob-rendell.co.uk</h2>
      <h3>Rob Rendell: Node.js / TypeScript Developer</h3>
      <h4>Recent developments:</h4>
      <ul>
        <li>27/10/22 @ 10.30 - Added <a href="recursion/">Recursion</a> project</li>
        <li>24/10/22 @ 15.10 - Added infinity spinner for lazy loading on website</li>
        <li>02/01/22 @ 17.40 - Leaderboard feature for time taken to complete <a href="sudoku/">Sudoku</a> using <code>AWS.DynamoDB.query</code> and GSI.</li>
        <li>28/11/21 @ 14.00 - AWS Lambda running my Python <a href="sudoku/">Sudoku generation</a> code; triggered by front end.</li>
        <li>16/11/21 @ 12.45 - Enabled &apos;Validate&apos; <a href="sudoku/play/0/">Sudoku Project</a> button.</li>
        <li>15/11/21 @ 15.53 - Enabled <a href="sudoku/">Sudoku Project</a>. It is currently using <code>AWS.DynamoDB.getItem</code></li>
        <li>05/11/21 @ 09.15 - Home page images loading using <code>AWS.S3.getSignedUrlPromise</code> and <code>AWS.S3.listObjectsV2</code></li>
      </ul>
      <hr/>
      <h4>This website is an ongoing personal project using:</h4>
      <ul>
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>AWS</li>
        <li>React</li>
      </ul>
      <hr/>
      <p>Here are some of my own photos from travelling over the years <i>(click to enlarge - coming soon)</i>:</p>
      <div id="home-page-img-div">
        <h2>Loading images from S3...</h2>
        <img src={InfinitySpinner}/>
      </div>
    </div>
  );
}