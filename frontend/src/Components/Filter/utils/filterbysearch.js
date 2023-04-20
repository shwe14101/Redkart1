

export const getProductsBySearch = (products, searches) => {
    const searchedProducts = [...products].filter(product => searches.length > 0 ? (searches.includes(product.brand) || searches.includes(product.title) || searches.includes(product.keyword) || searches.includes(product.category)): products);

    return searchedProducts
}