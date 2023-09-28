import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SummaryCard from "@/components/custom/SummaryCard";

describe("SummaryCard", () => {
  it("Should render the card with correct title and value", () => {
    const title = "Total bruto";
    const value = 1000;

    const { container, getByText } = render(
      <SummaryCard title={title} value={value} />
    );

    const htmlElement = container.querySelector("div");
    expect(htmlElement).toBeInTheDocument();

    expect(getByText(title)).toBeInTheDocument();
  });
});
