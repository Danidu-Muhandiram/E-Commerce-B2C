export const formatPrice = (n) => `Rs ${n.toLocaleString('en-US')}`;

// Instalment amounts aren't whole rupees, so show two decimals (rounded down,
// so three payments never add up to more than the price).
export const formatInstalment = (n) =>
    `Rs ${(Math.floor(n * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// Price the customer actually pays (sale price when there is one).
export const finalPrice = (product) => product.discountPrice ?? product.price;
