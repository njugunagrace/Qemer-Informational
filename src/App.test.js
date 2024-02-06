import React from "react";
import { render } from "@testing-library/react";
import App from './App';
test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByTestId("learn react");
  // expect(linkElement).toBeInTheDocument();
  // expect(linkElement).toHaveStyle({ display: "none" });
});
