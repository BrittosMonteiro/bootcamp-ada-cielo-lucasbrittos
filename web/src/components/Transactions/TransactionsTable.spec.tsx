import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import TransactionsTable from "./TransactionsTable";

describe("TransactionsTable", () => {
  it("Should render the component", async () => {
    const { container } = render(<TransactionsTable />);

    expect(container).toBeInTheDocument();
  });
});
