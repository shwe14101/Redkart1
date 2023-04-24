


import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_SIZE,
    FILTER_PRODUCTS_BY_PRICE,
    FILTER_PRODUCTS_BY_BRAND,
    FILTER_PRODUCTS_BY_CATEGORY
  } from './types';
  
  export const fetchProducts = () => (dispatch) => {
    fetch("https://backend-production-7f7a.up.railway.app/prod")
      .then((res) => res.json())
      .catch((err) =>
        fetch("https://backend-production-7f7a.up.railway.app/prod")
          .then((res) => res.json())
          .then((data) => data.products)
      )
      .then((data) => {
        dispatch({ type: FETCH_PRODUCTS, payload: data });
      });
  };
  
  export const filterProducts = (products, size) => (dispatch) => {
    dispatch({
      type: FILTER_PRODUCTS_BY_SIZE,
      payload: {
        size: size,
        items:
          size === ""
            ? products
            : products.filter(
                (x) => x.availableSizes.indexOf(size.toUpperCase()) >= 0
              ),
      },
    });
  };


  export const filterProductsbyBrand = (products, brand) => (dispatch) => {
    dispatch({
      type: FILTER_PRODUCTS_BY_BRAND,
      payload: {
        brand: brand,
        items:
          brand === ""
            ? products
            : products.filter(
                (x) => x.availableBrands.indexOf(brand.toUpperCase()) >= 0
              ),
      },
    });
  };

  export const filterProductsbyCategory = (products, category) => (dispatch) => {
    dispatch({
      type: FILTER_PRODUCTS_BY_CATEGORY,
      payload: {
        category: category,
        items:
          category === ""
            ? products
            : products.filter(
                (x) => x.availableCategories.indexOf(category.toUpperCase()) >= 0
              ),
      },
    });
  };
  
  export const sortProducts = (items, sort) => (dispatch) => {
    const products = items.slice();
    if (sort !== "") {
      products.sort((a, b) =>
        sort === "lowestprice"
          ? a.price > b.price
            ? 1
            : -1
          : a.price < b.price
          ? 1
          : -1
      );
    } else {
      products.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    dispatch({
      type: FILTER_PRODUCTS_BY_PRICE,
      payload: {
        sort: sort,
        items: products,
      },
    });
  };