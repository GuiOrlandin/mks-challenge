export function formatNumberWithSeparator(number: number) {
  if (number >= 1000) {
    return number.toLocaleString("pt-BR", {
      useGrouping: true,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  } else {
    return number.toString();
  }
}
