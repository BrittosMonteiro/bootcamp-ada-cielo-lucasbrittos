import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import WrapperComponent from "./WrapperComponent"; // Adjust the import path as needed
import { faker } from "@faker-js/faker";

describe("WrapperComponent", () => {
  it("Should render correctly on screen", () => {
    const sentence = faker.word.words({ count: 5 });
    const childContent = <p>{sentence}</p>;

    const { getByText } = render(
      <WrapperComponent>{childContent}</WrapperComponent>
    );

    expect(getByText(sentence)).toBeInTheDocument();
  });
});
