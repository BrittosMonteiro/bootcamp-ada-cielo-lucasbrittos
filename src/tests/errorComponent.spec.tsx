import ErrorComponent from "@/components/custom/ErrorComponent";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ErrorComponent", () => {
  it("Should render correctly on screen", () => {
    const { container, getByText } = render(<ErrorComponent />);

    const htmlElement = container.querySelector("div");
    expect(htmlElement).toBeInTheDocument();

    expect(
      getByText(
        "Não foi possível carregar as informações. Tente novamente mais tarde."
      )
    ).toBeInTheDocument();
  });
});
