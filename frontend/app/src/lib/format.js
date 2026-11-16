export const formatPrice = (n) => `Rs ${n.toLocaleString('en-US')}`;

// Price the customer actually pays (sale price when there is one).
export const finalPrice = (product) => product.discountPrice ?? product.price;
