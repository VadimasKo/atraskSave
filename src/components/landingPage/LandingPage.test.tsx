import "@testing-library/jest-dom";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LandingPage from "./LandingPage";

it("modal should be initialy closed", () => {
  render(
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>
  );

  const modalTitle = "Atsakyk ir surask";
  const modal = screen.queryByText(modalTitle);

  expect(modal).toBeNull();
});

it("modal should open after click", () => {
  render(
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>
  );

  const ballButton = screen.getByAltText("Pradėti");

  fireEvent.click(ballButton);

  const modalTitle = "Atsakyk ir surask";
  const modal = screen.getByText(modalTitle);

  expect(modal).toBeInTheDocument();
});

afterEach(cleanup);
