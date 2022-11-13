import { useState } from "react";

export function replaceCamelWithSpaces(color) {
  let response = "";
  if (!color || typeof color !== "string") return "";
  const firstChar = color[0].toUpperCase();

  response += firstChar;

  const restOfWord = color.slice(1);

  for (const char of restOfWord) {
    if (char.match(/[A-Z]/)) {
      response += " " + char;
    } else {
      response += char;
    }
  }
  return response;
}

export const DEFAULT_COLOR = "MediumVioletRed";

export const NEW_COLOR = "MidnightBlue";

function App() {
  const [enabledButtonBackgroundColor, setEnabledBackgroundColor] =
    useState(DEFAULT_COLOR);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const [number, setNumber] = useState(0);
  const otherColor =
    enabledButtonBackgroundColor === DEFAULT_COLOR ? NEW_COLOR : DEFAULT_COLOR;
  const buttonText = `Change to ${replaceCamelWithSpaces(otherColor)}`;

  const changeButtonColor = (prevState) => {
    if (enabledButtonBackgroundColor === DEFAULT_COLOR) {
      setEnabledBackgroundColor(NEW_COLOR);
      return;
    }

    setEnabledBackgroundColor(DEFAULT_COLOR);
  };

  const toggleButtonEnabled = (event) => {
    setIsButtonEnabled(!event.target.checked);
  };

  const buttonBackgroundColor = isButtonEnabled
    ? enabledButtonBackgroundColor
    : "gray";

  return (
    <div className="App">
      <button
        onClick={changeButtonColor}
        style={{ backgroundColor: buttonBackgroundColor }}
        disabled={!isButtonEnabled}
      >
        {buttonText}
      </button>
      <label htmlFor="number-input">Input Number</label>
      <input
        id="number-input"
        type="number"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <div data-testid="multiply">{number * 5}</div>
      <label htmlFor="disabled-button-checkbox">Disable Button</label>
      <input
        id="disabled-button-checkbox"
        type="checkbox"
        onClick={toggleButtonEnabled}
      />
    </div>
  );
}

export default App;
