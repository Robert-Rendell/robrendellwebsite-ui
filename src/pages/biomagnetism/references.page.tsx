import React from "react";
import { RobBackButton } from "../../components/back-button.component";

export function BiomagnetismReferencesPage() {
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>
        <RobBackButton /> Biochemistry Project References
      </h1>
      <ol className="ol-extra-margins">
        <li>https://en.wikipedia.org/wiki/Bird_migration</li>
        <li>https://ssec.si.edu/stemvisions-blog/how-do-birds-navigate#:~:text=Researchers%20have%20discovered%20a%20small,position%20relative%20to%20Earth&apos;s%20poles.</li>
        <li>https://www.realclearscience.com/blog/2019/06/11/why_is_there_magnetite_in_the_human_brain.html</li>
        <li>https://en.wikipedia.org/wiki/Homing_pigeon</li>
        <li>https://www.telegraph.co.uk/news/science/science-news/10021789/Iron-spheres-in-ears-may-help-birds-navigate.html#:~:text=Scientists%20have%20found%20tiny%20clumps,are%20flying%20north%20or%20south.</li>
      </ol>
    </div>
  );
}
