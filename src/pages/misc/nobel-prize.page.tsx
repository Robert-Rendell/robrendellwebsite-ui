import React, { useState } from "react";
import InfinitySpinner from "../../resources/infinity-spinner.svg";
import { SharedRoutes } from "../../common/shared-routes";
import { SharedText } from "../../common/shared-text";
import { usePageView } from "../../hooks/use-page-view.hook";
import { useNobelPrize } from "./hooks/useNobelPrize.hook";
import { NewTabLink } from "../../components/new-tab-link.component";

export function NobelPrizePage() {
  usePageView(SharedRoutes.Miscellaneous.NobelPrize);
  const { nobelPrize, categories } = useNobelPrize();
  const [filter, setFilter] = useState<string | undefined>();
  return (
    <div className="standard-page-margins standard-page-styling">
      <h1>{SharedText.Miscellaneous.NobelPrize}</h1>
      {nobelPrize && (
        <select
          onChange={(ev) => {
            setFilter(ev.target.value);
          }}
        >
          {categories.current?.map((c, ci) => (
            <option key={`ci${ci}`} value={c} label={c}></option>
          ))}
        </select>
      )}
      <>
        {nobelPrize?.nobelPrizes.map((prize, i) => {
          return (
            (!filter || prize.category.en === filter) && (
              <div key={i}>
                <p>
                  [{prize.awardYear}] {prize.categoryFullName.en}
                </p>
                <ul>
                  {prize.laureates?.map((l, lik) => (

                    <li key={`li-${lik}`}>
                      <li>
                        <>
                          <NewTabLink
                            href={l.links.href.replace(
                              "api.nobelprize.org/2",
                              "nobelprize.org"
                            )}
                          >
                            {l.fullName?.en || l.orgName?.en}
                          </NewTabLink>
                        </>
                      </li>
                      <ul>
                        <li>{l.motivation.en}</li>
                      </ul>
                    </li>
                  ))}
                </ul>
                <hr />
              </div>
            )
          );
        })}
        {!nobelPrize && <img src={InfinitySpinner} />}
      </>
    </div>
  );
}
