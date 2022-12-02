import React from "react";

type Props = {
  questionText?: string;
  hrOff?: boolean;
};

export function QuestionComponent(props: React.PropsWithChildren<Props>) {
  return (
    <>
      {!props.hrOff && <hr />}
      <h2 className="centred">
        <i>{props.questionText ?? props.children}</i>
      </h2>
      {!props.hrOff && <hr />}
    </>
  );
}
