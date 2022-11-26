import React from "react";

type Props = {
  questionText?: string;
};

export function QuestionComponent(props: React.PropsWithChildren<Props>) {
  return (
    <>
      <hr />
      <h2 className="centred">
        <i>{props.questionText ?? props.children}</i>
      </h2>
      <hr />
    </>
  );
}
