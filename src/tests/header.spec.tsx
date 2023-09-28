import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderComponent from "@/components/custom/HeaderComponent";
import UserOptionsComponent from "@/components/actionIconsComponents/UserOptionsComponent";
import ThemeSwitcherComponent from "@/components/actionIconsComponents/ThemeSwitcherComponent";

describe("HeaderComponent", () => {
  it("Should render correctly", () => {
    const { getByText } = render(<HeaderComponent />);

    expect(getByText("Dashboard")).toBeInTheDocument();
    expect(getByText("Relatório")).toBeInTheDocument();
  });
});

describe("UserOptionsComponent", () => {
  it("Should render correctly", () => {
    const { getByText } = render(<UserOptionsComponent />);

    expect(getByText("User options menu")).toBeInTheDocument();
  });
});

describe("ThemeSwitcherComponent", () => {
  it("Should render correctly", () => {
    const { getByText } = render(<ThemeSwitcherComponent />);

    getByText("Toggle theme");
    expect(getByText("Toggle theme")).toBeInTheDocument();
  });
});
