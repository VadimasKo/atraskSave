import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import Football from "./Football";

it("Tennis should render", () => {
  render(<Football />);

  const footballTitle = "Futbolas";
  const footballHeader = screen.queryByText(footballTitle);

  expect(footballHeader).toBeInTheDocument();
});

afterEach(cleanup);
