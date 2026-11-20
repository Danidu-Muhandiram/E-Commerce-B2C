const clean = (s) =>
    s
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '') // pique matches piqué
        .replace(/[^a-z0-9\s]/g, ' ');

const words = (s) => clean(s).split(/\s+/).filter(Boolean);

// every word typed has to show up somewhere in the product
export const matchesSearch = (product, query) => {
    const terms = words(query);
    if (!terms.length) return true;
    const text = clean(
        [product.name, product.category, product.gender, ...product.colors, ...product.tags].join(' '),
    );
    // "shirts" should still find "shirt"
    return terms.every((t) => text.includes(t) || (t.length > 3 && t.endsWith('s') && text.includes(t.slice(0, -1))));
};

export const searchProducts = (products, query) => products.filter((p) => matchesSearch(p, query));
