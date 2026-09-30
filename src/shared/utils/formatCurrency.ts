export const formatCurrency = (
  value: number,
  isCents: boolean = false,
): string => {
  const amount = isCents ? value / 100 : value;

  return amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
