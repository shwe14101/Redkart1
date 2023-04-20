export const getProductsByCategory = (products, category) => products.filter(product => category !== "all" ? product.category === category : products);
