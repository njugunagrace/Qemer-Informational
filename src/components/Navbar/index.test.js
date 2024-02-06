import React from "react";
import { render } from "@testing-library/react";
import Navbar from "."


test("Navbar component renders without errors", () => {
  const { getByText, getByAltText } = render(<Navbar />);

 
  const logoElement = getByAltText("logo");
  const homeLink = getByText("Home");
  const whatWeDoLink = getByText("What We Do");
  const solutionsLink = getByText("Products");
  const contactsLink = getByText("Contact");

  expect(logoElement).toBeInTheDocument();
  expect(homeLink).toBeInTheDocument();
  expect(whatWeDoLink).toBeInTheDocument();
  expect(solutionsLink).toBeInTheDocument();
  expect(contactsLink).toBeInTheDocument();
});



