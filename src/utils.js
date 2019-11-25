export function formatPrice(price, currency) {
  return (price / 100).toLocaleString(
    window ? window.navigator.language : "sk",
    {
      style: "currency",
      currency: currency ? currency : "EUR"
    }
  );
}
