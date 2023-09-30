import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainComponent from "./MainComponent";

describe("MainComponent", () => {
  it("Should render correctly on screen", () => {
    const { container } = render(<MainComponent />);
    expect(container).toBeInTheDocument();
  });
});
