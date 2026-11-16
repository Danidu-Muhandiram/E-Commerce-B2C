// Mock catalogue, shaped like backend/models/Product.js so it can be swapped for
// the API later. Images store only the Cloudinary public ID (see lib/cloudinary.js).
// countInStock, rating and numReviews are placeholders.

const products = [
    {
        _id: 'p001',
        name: 'Essential Crew Neck Tee',
        slug: 'mens-short-sleeve-crew-neck-tshirt',
        description:
            'A slim, everyday crew neck in soft slub cotton. Short sleeves, ribbed collar, cut close to the body without clinging. Built for Colombo heat and easy layering.',
        price: 3490,
        discountPrice: 2790,
        category: 't-shirts',
        gender: 'men',
        tags: ['basics', 'cotton'],
        colors: ['Plum'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [
            { publicId: 'veloura/products/mens-short-sleeve-crew-neck-tshirt/front' },
            { publicId: 'veloura/products/mens-short-sleeve-crew-neck-tshirt/back' },
            { publicId: 'veloura/products/mens-short-sleeve-crew-neck-tshirt/detail' },
            { publicId: 'veloura/products/mens-short-sleeve-crew-neck-tshirt/model' },
        ],
        countInStock: 24,
        isFeatured: false,
        isNew: false,
        isTrending: true,
        brand: 'Veloura',
        rating: 4.6,
        numReviews: 38,
    },
    {
        _id: 'p002',
        name: 'Oversized Heavyweight Tee',
        slug: 'oversized-short-sleeve-crew-neck-tshirt',
        description:
            'A boxy heavyweight tee with dropped shoulders and a thick ribbed collar. Dense cotton jersey that holds its shape, with an easy oversized fit through the body and sleeves.',
        price: 4290,
        category: 't-shirts',
        gender: 'men',
        tags: ['oversized', 'heavyweight', 'cotton'],
        colors: ['Olive'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            { publicId: 'veloura/products/Oversized short-sleeve crew-neck t-shirt/front' },
            { publicId: 'veloura/products/Oversized short-sleeve crew-neck t-shirt/back' },
            { publicId: 'veloura/products/Oversized short-sleeve crew-neck t-shirt/detail' },
        ],
        countInStock: 15,
        isFeatured: false,
        isNew: true,
        isTrending: false,
        brand: 'Veloura',
        rating: 4.8,
        numReviews: 12,
    },
];

export default products;

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
