let DOLLAR = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function formatCurrency(price: number, discount?: number) {
  const result = discount ? price - (price / 100) * discount : price;

  return DOLLAR.format(result);
}
