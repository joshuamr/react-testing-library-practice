// logging-in.steps.js

import { defineFeature, loadFeature } from "jest-cucumber";
import App, { DEFAULT_COLOR, NEW_COLOR, replaceCamelWithSpaces } from "./App";
import { render, screen, fireEvent } from "@testing-library/react";

const feature = loadFeature("./src/test.feature");

defineFeature(feature, (test) => {
  let buttonElement;

  test("I click the red button", ({ given, when, then, and }) => {
    given("I have the button with a red color", () => {
      render(<App />);
      buttonElement = screen.getByRole("button", {
        name: /change to midnight blue/i,
      });

      expect(buttonElement).toHaveStyle({
        backgroundColor: DEFAULT_COLOR,
      });
    });

    when("I click the button", () => {
      fireEvent.click(buttonElement);
    });

    then("the button should change to blue", () => {
      expect(buttonElement).toHaveStyle({
        backgroundColor: NEW_COLOR,
      });
    });

    and("the text should change", () => {
      expect(buttonElement).toHaveTextContent(/change to medium violet red/i);
    });
  });
});
