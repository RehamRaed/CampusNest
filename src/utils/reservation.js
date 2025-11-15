export function formatPrice(price) {
  return Number(price).toFixed(2);
}

export function totalPrice(basePrice, guests) {
  return formatPrice(basePrice * guests);
}

export function extraGuestsPrice(basePrice, guests) {
  return formatPrice((guests - 1) * basePrice);
}
