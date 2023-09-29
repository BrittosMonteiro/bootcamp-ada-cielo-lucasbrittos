import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserOptionsComponent from "@/components/actionIconsComponents/UserOptionsComponent";

describe("UserOptionsComponent", () => {
  it("Should render correctly", () => {
    const { container } = render(<UserOptionsComponent />);

    expect(container).toBeInTheDocument();
  });
});

describe("UserOptionsComponent", () => {
  it("Should render and display options correctly", () => {
    const { getByText } = render(<UserOptionsComponent />);

    expect(getByText("User options menu")).toBeInTheDocument();
  });
});
