import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  //   const textElement = screen.getByText(/hello/i);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name="Bob" />);
  const textElement = screen.getByText("Hello Bob");
  expect(textElement).toBeInTheDocument();
});
