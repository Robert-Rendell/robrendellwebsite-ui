import React from "react";

type Props = {
  questionText: string;
};

export function QuestionComponent(props: Props) {
  return (
    <>
      <hr />
      <h2 className="centred">
        <i>{props.questionText}</i>
      </h2>
      <hr />
    </>
  );
}
