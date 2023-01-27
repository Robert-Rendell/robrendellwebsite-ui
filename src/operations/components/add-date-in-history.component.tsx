import React, { FormEvent, useState } from "react";
import {
  ErrorResponse,
  InterestingDateInHistory,
} from "robrendellwebsite-common";
import InfinitySpinner from "../../resources/infinity-spinner.svg";
import { FormGroup, FormLabel } from "react-bootstrap";
import "../operations.page.css";
import { useAddDateInHistory } from "../hooks/use-add-date-in-history.hook";

export function isDateInHistory(
  response: InterestingDateInHistory | ErrorResponse
): response is InterestingDateInHistory {
  return (response as InterestingDateInHistory).event !== undefined;
}

export function AddInterestingDateInHistoryComponent() {
  const [dateInHistory, setDateInHistory] =
    useState<InterestingDateInHistory>();
  const response = useAddDateInHistory(dateInHistory);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formProps = Object.fromEntries(formData);
    setDateInHistory(formProps as InterestingDateInHistory);
    if (event.isDefaultPrevented()) {
      console.log("error");
    }
    event.currentTarget.reset();
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          onSubmit(event);
        }}
      >
        <FormGroup>
          <FormLabel>Date</FormLabel>
          <br />
          <input name="date"></input>
          <br />
          <FormLabel>Event</FormLabel>
          <br />
          <textarea name="event" rows={5} cols={24}></textarea>
          <br />
          <FormLabel>School</FormLabel>
          <br />
          <input name="school"></input>
          <br />
          <FormLabel>Insertion index (optional)</FormLabel>
          <br />
          <input name="insertionIndex" type="number"></input>
          <br />

          <input type="submit"></input>
          <br />
        </FormGroup>
      </form>
      {response === null && <img src={InfinitySpinner} />}
      {response && isDateInHistory(response) && (
        <p>
          &quot;{response.event.substring(0, 15)}...&quot; successfully added!
          It will take a few minutes for S3 to update the cached file at the
          public S3 URL.
        </p>
      )}
      {response && !isDateInHistory(response) && (
        <p>Error: {response.errorMessage}</p>
      )}
      <hr />
    </>
  );
}
