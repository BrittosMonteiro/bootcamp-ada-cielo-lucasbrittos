import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Summary from "@/components/Summary/SummaryComponent";

describe("Summary", () => {
  it("Should render correctly", () => {
    render(<Summary />);

    const text = "Não foi possível carregar as informações. Tente novamente mais tarde."
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
