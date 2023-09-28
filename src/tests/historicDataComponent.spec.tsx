import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import HistoricDataComponent from "@/components/custom/HistoricDataComponent";

describe("HistoricDataComponent", () => {
  it("Should render correctly", () => {
    const { container } = render(<HistoricDataComponent />);
    
    const div = container.querySelector("div");
    expect(div).toBeInTheDocument();
  });
});
