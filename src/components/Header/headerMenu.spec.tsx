import HeaderMenuComponent from "@/components/Header/HeaderMenuComponent";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("HeaderMenuComponent", () => {
  it("Should render correctly", () => {
    const { container, getByText } = render(<HeaderMenuComponent />);

    const navElement = container.querySelector("nav");
    expect(navElement).toBeInTheDocument();
    expect(getByText("Dashboard")).toBeInTheDocument();
  });
});
