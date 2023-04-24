import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_SIZE,
    FILTER_PRODUCTS_BY_PRICE,
    FILTER_PRODUCTS_BY_BRAND,
    FILTER_PRODUCTS_BY_CATEGORY
  } from '../actions/types';
  
  const initState = { items: [], filteredItems: [], size: "", sort: "",brand:"",category:"", };
  export default function (state = initState, action) {
    switch (action.type) {
      case FETCH_PRODUCTS:
        return { ...state, items: action.payload, filteredItems: action.payload };
      case FILTER_PRODUCTS_BY_SIZE:
        return {
          ...state,
          filteredItems: action.payload.items,
          size: action.payload.size,
        };
      case FILTER_PRODUCTS_BY_PRICE:
        return {
          ...state,
          filteredItems: action.payload.items,
          sort: action.payload.sort,
        };
        case FILTER_PRODUCTS_BY_BRAND:
        return {
          ...state,
          filteredItems: action.payload.items,
          brand: action.payload.brand,
        };
        case FILTER_PRODUCTS_BY_CATEGORY:
        return {
          ...state,
          filteredItems: action.payload.items,
          category: action.payload.category,
        };
  
      default:
        return state;
    }
  }