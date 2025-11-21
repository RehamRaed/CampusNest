export function formatPrice(price: number): string {
  return price.toFixed(2);
}

export function totalPrice(basePrice: number, guests: number): number {
  return basePrice * guests;
}

export function extraGuestsPrice(basePrice: number, guests: number): number {
  return guests <= 1 ? 0 : (guests - 1) * basePrice;
}
