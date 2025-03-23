import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("h1が存在するかどうか", () => {
  const { debug, container } = render(<Greet />);
  const h1El = screen.getByText("こんにちは");
  expect(h1El).toBeInTheDocument();

  // const radioEl = screen.getByRole("radio");
  // debug(radioEl);
  // expect(radioEl).toBeInTheDocument();

  // const imgEl = screen.getByRole("img");
  // debug(imgEl);

  // const imgEl = screen.getByAltText("React Logo");
  // debug(imgEl);

  // const headingEl = screen.getByRole("heading", { name: "こんにちは" });
  // debug(headingEl);

  const h2El = container.querySelector("h2");
  debug(h2El);
});
