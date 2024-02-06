import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Home from ".";


test("hides description when mouse leaves a detail box", () => {
  render(<Home />);
  const firstDetailBox = screen.getByTestId("detail-box-0");
  const hiddenDescription = screen.queryByText((content, element) => {
    return (
      content ===
      "Children identified to suffer from delayed milestones are registered and referred to the hospital for treatment."
    );
  });
  expect(hiddenDescription).not.toBeInTheDocument();
  fireEvent.mouseOver(firstDetailBox);
    const visibleDescription = screen.getByText(
    "Children identified to suffer from delayed milestones are registered and referred to the hospital for treatment."
  );
  expect(visibleDescription).toBeInTheDocument();

  fireEvent.mouseOut(firstDetailBox);
  const reHiddenDescription = screen.queryByText((content, element) => {
    return (
      content ===
      "Children identified to suffer from delayed milestones are registered and referred to the hospital for treatment."
    );
  });
  expect(reHiddenDescription).not.toBeInTheDocument();
});
