// logging-in.steps.js

import { defineFeature, loadFeature } from "jest-cucumber";
import App, { DEFAULT_COLOR, NEW_COLOR } from "./App";
import { render, screen, fireEvent } from "@testing-library/react";

const feature = loadFeature("./src/test2.feature");

defineFeature(feature, (test) => {
  test("I enter a number", ({ when, then, and }) => {
    when(/^I enter a number (\d+) in the input field$/, (value) => {
      render(<App />);
      const inputElement = screen.getByRole("spinbutton", {
        name: /input number/i,
      });
      expect(inputElement.value).toEqual("0");
      fireEvent.change(inputElement, { target: { value } });
    });

    then(
      /the number in the multiply div should be (\d+)/,
      (multipliedNumber) => {
        const div = screen.getByTestId("multiply");
        expect(div).toHaveTextContent(multipliedNumber);
      }
    );
  });
});
