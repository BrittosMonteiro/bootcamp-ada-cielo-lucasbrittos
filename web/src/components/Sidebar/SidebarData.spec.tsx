import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import SidebarDataItem from "./SidebarDataItem"; // Assuming your component file is named SidebarDataItem.js
import { faker } from "@faker-js/faker";

describe("SidebarDataItem", () => {
  const testData = {
    id: faker.word.words({ count: 1 }),
    label: faker.word.noun({ length: 10, strategy: "closest" }),
    value: faker.number.int({}),
  };

  it("renders label and value correctly", () => {
    const { getByText } = render(<SidebarDataItem {...testData} />);

    const labelElement = getByText(testData.label);
    expect(labelElement).toBeInTheDocument();

    const valueElement = getByText(testData.value);
    expect(valueElement).toBeInTheDocument();
  });
});
