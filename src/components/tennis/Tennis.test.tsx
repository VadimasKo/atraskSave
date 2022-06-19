import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import Tennis from "./Tennis";

it("Tennis should render", () => {
  render(<Tennis />);

  const tennisTitle = "Tenisas";
  const tennisHeader = screen.queryByText(tennisTitle);

  expect(tennisHeader).toBeInTheDocument();
});

afterEach(cleanup);
