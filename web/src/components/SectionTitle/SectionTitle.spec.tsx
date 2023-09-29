import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import SectionTitleComponent from "./SectionTitleComponent";
import { faker } from "@faker-js/faker";

const title = faker.word.words({ count: 2 });

describe("SectionTitleComponent", () => {
  it("Should render correctly on screen", () => {
    const { container } = render(<SectionTitleComponent title={title} />);

    expect(container).toBeInTheDocument();
  });
  
  it("Should render correctly and display its title on screen", () => {
    const { getByText } = render(<SectionTitleComponent title={title} />);

    expect(getByText(title)).toBeInTheDocument();
  });
});
