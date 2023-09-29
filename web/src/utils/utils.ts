import { CardBrandTotalNetAmountType, ItemType } from "@/types/data.types";

export const getCardBrandsData = (items: ItemType[]) => {
  const filteredBrands: string[] = Object.values(
    items.reduce((acc, cur) => ({ ...acc, [cur.cardBrand]: cur.cardBrand }), {})
  );

  let cardBrandTotalNetAmount: CardBrandTotalNetAmountType[] = [];
  for (const brand of filteredBrands) {
    let current = 0;
    items.map((item) => {
      if (item.cardBrand === brand) {
        current += item.netAmount;
      }
    });
    cardBrandTotalNetAmount.push({ brand, totalNetAmount: current });
  }
  return cardBrandTotalNetAmount;
};
