import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThemeSwitcherComponent from "./ThemeSwitcherComponent";

describe("ThemeSwitcherComponent", () => {
  it("Should render correctly", () => {
    const { container } = render(<ThemeSwitcherComponent />);

    expect(container).toBeInTheDocument();
  });
});

describe("ThemeSwitcherComponent", () => {
  it("Should render and display options correctly", () => {
    const { getByText } = render(<ThemeSwitcherComponent />);
    
    expect(getByText("Toggle theme")).toBeInTheDocument();
  });
});
