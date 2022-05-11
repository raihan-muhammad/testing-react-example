import { render, screen } from "@testing-library/react";
import Header from "./Header";

it(`Shoud be render Header`, () => {
  render(<Header />);
  expect(screen.getByText("Header")).toBeInTheDocument();
});
