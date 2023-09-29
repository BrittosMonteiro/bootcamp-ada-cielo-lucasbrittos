import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Transactions from "./Transactions";

describe("Transactions", () => {
  it("renders the component", () => {
    const { container } = render(<Transactions />);

    expect(container).toBeInTheDocument();
  });
});
