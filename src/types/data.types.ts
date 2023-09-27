export type SummaryType = {
  totalQuantity: number;
  totalAmount: number;
  totalNetAmount: number;
  totalAverageAmount: number;
  initialDate: string;
  finalDate: string;
};

export type PaginationType = {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  numPages: number;
  lastPage: boolean;
  firstPage: boolean;
};

export type ItemType = {
  id: string;
  merchantId: string;
  paymentNode: number;
  cnpjRoot: number;
  date: string;
  paymentType: string;
  cardBrand: string;
  authorizationCode: string;
  truncatedCardNumber: string;
  grossAmount: number;
  netAmount: number;
  terminal: string;
  administrationFee: number;
  channelCode: number;
  channel: string;
  withdrawAmount: number;
  minimumMDRAmmount: number;
  mdrTaxAmount: number;
  mdrFeeAmount: number;
  status: string;
};

export type DataType = {
  summary: SummaryType;
  pagination: PaginationType;
  items: ItemType[];
};
