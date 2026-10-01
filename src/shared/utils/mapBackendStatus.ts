export const mapBackendStatus = (status?: string) => {
  if (!status) return "Pendente";
  const s = status.toLowerCase();
  if (s === "paid" || s === "pago") return "Pago";
  if (s === "partial" || s === "parcial") return "Parcial";
  return "Pendente";
};
