import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("render App component", () => {
    render(<App />);
    expect(screen.getByText(/star wars/i)).toBeInTheDocument();
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it("data loaded and showed", async () => {
    render(<App />);
    const listElement = await screen.findByTestId("star-wars");
    const error = screen.queryByText(
      "Star Wars server is not available in that moment. Please try again later"
    );
    expect(error).not.toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
    expect(listElement.childElementCount).toBe(10);
  });
});
