import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { faker } from "@faker-js/faker";
import { ItemType } from "@/types/data.types";
import SidebarComponent from "@/components/Sidebar/SidebarComponent";

const item: ItemType = {
  administrationFee: faker.number.float(),
  authorizationCode: `${faker.number.int({ min: 100000, max: 999999 })}`,
  cardBrand: faker.finance.creditCardIssuer(),
  channel: faker.internet.userAgent(),
  channelCode: faker.number.int({ min: 10, max: 99 }),
  cnpjRoot: faker.number.int({ min: 100000, max: 999999 }),
  date: "2021-05-26T12:12:55",
  grossAmount: faker.number.float({ min: 50.0, max: 100.0 }),
  id: `${faker.number.int({ min: 100000000000000, max: 999999999999999 })}`,
  mdrFeeAmount: faker.number.float({ min: 50.0, max: 100.0 }),
  mdrTaxAmount: faker.number.float({ min: 50.0, max: 100.0 }),
  merchantId: `${faker.number.int({ min: 1000000000, max: 9999999999 })}`,
  minimumMDRAmmount: faker.number.float({ min: 50.0, max: 100.0 }),
  netAmount: faker.number.float({ min: 50.0, max: 100.0 }),
  paymentNode: faker.number.int({ min: 100000, max: 999999 }),
  paymentType: faker.word.noun(),
  status: faker.word.noun({ strategy: "any-length" }),
  terminal: `${faker.number.int({ min: 10000000, max: 99999999 })}`,
  truncatedCardNumber: `${faker.finance.creditCardNumber()}`,
  withdrawAmount: faker.number.float({ min: 50.0, max: 100.0 }),
};

const renderComponent = () => {
  const { container, getByText, getByRole } = render(
    <SidebarComponent item={item} />
  );
  return { container, getByRole, getByText };
};

describe("SidebarComponent", () => {
  it("Should render the sidebar correctly", () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
  });

  it("Should click on the button and open the sidebar", () => {
    const { container, getByText, getByRole } = renderComponent();

    const button = getByRole("button");
    fireEvent.click(button);
    expect(container).toBeVisible();
    expect(getByText("Informação da transação")).toBeVisible();
  });

  it("Should display item information on the screen", () => {
    const { container, getByText, getByRole } = renderComponent();

    const button = getByRole("button");

    fireEvent.click(button);
    expect(container).toBeVisible();
  });
});
