import ErrorComponent from "./ErrorComponent";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const renderComponent = () => {
  const { container, getByText } = render(<ErrorComponent />);
  return { container, getByText };
};

describe("ErrorComponent", () => {
  it("Should render correctly on screen", () => {
    const { container } = renderComponent();

    const htmlElement = container.querySelector("div");
    expect(htmlElement).toBeInTheDocument();
  });
  
  it("Should render and display its message correctly on screen", () => {
    const { getByText } = renderComponent();
    expect(
      getByText(
        "Não foi possível carregar as informações. Tente novamente mais tarde."
      )
    ).toBeInTheDocument();
  });
});
