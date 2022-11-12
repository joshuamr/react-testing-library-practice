import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('should show the correct initial color for the button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {name: /change to blue/i})

  expect(buttonElement).toBeInTheDocument()

  expect(buttonElement).toHaveStyle({backgroundColor: 'red'})
});

test('should turn the button blue when button is clicked', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {name: /change to blue/i})
  fireEvent.click(buttonElement)
  expect(buttonElement).toHaveStyle({backgroundColor: 'blue'})
  expect(buttonElement).toHaveTextContent(/change to red/i)
});
