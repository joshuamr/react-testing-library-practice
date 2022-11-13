import { render, screen, fireEvent } from "@testing-library/react";
import App, { DEFAULT_COLOR, NEW_COLOR, replaceCamelWithSpaces } from "./App";

describe("app", () => {
  test("should show the correct initial color for the button", () => {
    render(<App />);
    const buttonElement = screen.getByRole("button", {
      name: /change to midnight blue/i,
    });

    expect(buttonElement).toBeInTheDocument();

    expect(buttonElement).toHaveStyle({
      backgroundColor: DEFAULT_COLOR,
    });
  });

  test("should turn the button blue when button is clicked", () => {
    render(<App />);
    const buttonElement = screen.getByRole("button", {
      name: /change to midnight blue/i,
    });
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveStyle({
      backgroundColor: NEW_COLOR,
    });
    expect(buttonElement).toHaveTextContent(/change to medium violet red/i);
  });

  test("initial conditions", () => {
    render(<App />);
    // expect the color button to be enabled
    const buttonElement = screen.getByRole("button", {
      name: /change to midnight blue/i,
    });
    expect(buttonElement).toBeEnabled();

    // expect the checkbox to be unchecked
    const checkBoxElement = screen.getByRole("checkbox");
    expect(checkBoxElement).not.toBeChecked();
  });

  test("disables button when checkbox is checked", () => {
    render(<App />);
    // expect the color button to be enabled
    const buttonElement = screen.getByRole("button", {
      name: /change to midnight blue/i,
    });
    expect(buttonElement).toBeEnabled();

    // expect the checkbox to be unchecked
    const checkBoxElement = screen.getByRole("checkbox", {
      name: /disable button/i,
    });
    expect(checkBoxElement).not.toBeChecked();

    fireEvent.click(checkBoxElement);
    expect(buttonElement).toBeDisabled();
  });

  test("enabled button when checkbox is checked after disabled", () => {
    render(<App />);
    // expect the color button to be enabled
    const buttonElement = screen.getByRole("button", {
      name: /change to midnight blue/i,
    });
    expect(buttonElement).toBeEnabled();

    // expect the checkbox to be unchecked
    const checkBoxElement = screen.getByRole("checkbox", {
      name: /disable button/i,
    });
    expect(checkBoxElement).not.toBeChecked();

    fireEvent.click(checkBoxElement);
    expect(buttonElement).toBeDisabled();

    fireEvent.click(checkBoxElement);
    expect(buttonElement).toBeEnabled();
  });

  test("should when button is red, turn the button gray when checkbox checked, turn back to red when checked again", () => {
    render(<App />);
    // expect the color button to be enabled
    const buttonElement = screen.getByRole("button", {
      name: /change to midnight blue/i,
    });
    expect(buttonElement).toBeEnabled();

    // expect the checkbox to be unchecked
    const checkBoxElement = screen.getByRole("checkbox", {
      name: /disable button/i,
    });
    expect(checkBoxElement).not.toBeChecked();

    fireEvent.click(checkBoxElement);
    expect(buttonElement).toBeDisabled();

    expect(buttonElement).toHaveStyle({
      backgroundColor: "gray",
    });

    fireEvent.click(checkBoxElement);
    expect(buttonElement).toHaveStyle({
      backgroundColor: DEFAULT_COLOR,
    });
  });

  test("should when button is blue, turn the button gray when checkbox checked, turn back to blue when checked again", () => {
    render(<App />);
    // expect the color button to be enabled
    const buttonElement = screen.getByRole("button", {
      name: /change to midnight blue/i,
    });
    expect(buttonElement).toBeEnabled();

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveStyle({
      backgroundColor: NEW_COLOR,
    });

    // expect the checkbox to be unchecked
    const checkBoxElement = screen.getByRole("checkbox", {
      name: /disable button/i,
    });
    expect(checkBoxElement).not.toBeChecked();

    fireEvent.click(checkBoxElement);
    expect(buttonElement).toBeDisabled();

    expect(buttonElement).toHaveStyle({
      backgroundColor: "gray",
    });

    fireEvent.click(checkBoxElement);
    expect(buttonElement).toHaveStyle({
      backgroundColor: NEW_COLOR,
    });
  });
});

describe("replaceCamelWithSpaces", () => {
  test("Works for single word", () => {
    const word = replaceCamelWithSpaces("red");
    expect(word).toEqual("Red");
  });

  test("Works for two words", () => {
    const word = replaceCamelWithSpaces("midnightBlue");
    expect(word).toEqual("Midnight Blue");
  });

  test("Works for more than two words", () => {
    const word = replaceCamelWithSpaces("mediumVioletRed");
    expect(word).toEqual("Medium Violet Red");
  });
});
