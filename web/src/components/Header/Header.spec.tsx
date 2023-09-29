import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderComponent from "@/components/Header/HeaderComponent";

describe("HeaderComponent", () => {
  it("Should render correctly", () => {
    const { container } = render(<HeaderComponent />);

    expect(container).toBeInTheDocument();
  });
  
  it("Should render correctly", () => {
    const { getByText } = render(<HeaderComponent />);

    expect(getByText("Dashboard")).toBeInTheDocument();
  });
});
