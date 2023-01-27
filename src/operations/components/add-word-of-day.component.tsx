import React, { FormEvent, useState } from "react";
import { FormGroup, FormLabel } from "react-bootstrap";
import { ErrorResponse, WordOfTheDay } from "robrendellwebsite-common";
import { useAddWordOfDay } from "../hooks/use-add-word-of-day.hook";
import InfinitySpinner from "../../resources/infinity-spinner.svg";
import { useToday } from "../hooks/use-today.hook";
import "../operations.page.css";

export function isWordOfTheDay(
  response: WordOfTheDay | ErrorResponse
): response is WordOfTheDay {
  return (response as WordOfTheDay).word !== undefined;
}

export function AddWordOfDayComponent() {
  const [wordOfDay, setWordOfDay] = useState<WordOfTheDay>();
  const response = useAddWordOfDay(wordOfDay);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formProps = Object.fromEntries(formData);
    setWordOfDay(formProps as WordOfTheDay);
    event.currentTarget.reset();
  };
  const today = useToday();

  return (
    <>
      <form
        className="add-form"
        onSubmit={(event) => {
          onSubmit(event);
        }}
      >
        <FormGroup>
          <FormLabel>Date</FormLabel>
          <br />
          <input
            pattern="(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{2}"
            name="date"
            defaultValue={today}
          ></input>
          <br />
          <FormLabel>Word</FormLabel>
          <br />
          <input name="word"></input>
          <br />
          <FormLabel>Definition</FormLabel>
          <br />
          <textarea name="definition" rows={5} cols={24}></textarea>
          <br />
          <FormLabel>Context</FormLabel>
          <br />
          <input name="context"></input>
          <br />

          <input type="submit"></input>
          <br />
        </FormGroup>
      </form>
      {response === null && <img src={InfinitySpinner} />}
      {response && isWordOfTheDay(response) && (
        <p>
          &quot;{response.word}&quot; successfully added! It will take a few
          minutes for S3 to update the cached file at the public S3 URL.
        </p>
      )}
      {response && !isWordOfTheDay(response) && (
        <p>Error: {response.errorMessage}</p>
      )}
      <hr />
    </>
  );
}
