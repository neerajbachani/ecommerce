// import { api } from "../../../Config/ApiConfig";
// import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType";

// export const findProducts = (reqData) => async (dispatch) => {
//     dispatch({ type: FIND_PRODUCT_REQUEST });
    
//     const {
//       minPrice,
//       maxPrice,
//       minDiscount,
//       stock,
//       sort,
//       pageNumber,
//       pageSize,
//     } = reqData;
    
//     try {
//       const data = await api.get(`/api/products`)
//       console.log("product data", data)
//       dispatch({type: FIND_PRODUCT_SUCCESS, payload: data})
//     } catch (error) {
//       dispatch({type: FIND_PRODUCT_FAILURE, payload: error.message})
//     }
//   };
  
//   export const findProductsById = (reqData) => async (dispatch) => {
//     dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
    
//     const {productId} = reqData;
    
//     try {
//       const data = await api.get(`/api/products/id/${productId}`)
//       dispatch({type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data})
//     } catch (error) {
//       dispatch({type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message})
//     }
//   };
import { api } from "../../../Config/ApiConfig";
import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_FAILURE,
  FIND_PRODUCT_REQUEST,
  FIND_PRODUCT_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_REQUEST });

  const {
    color,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
    subCategory,
    // Add new parameters for category and option
    selectedCategory,
    selectedOption,
  } = reqData;

console.log("selectedCategory", selectedCategory);
console.log("selectedOption", selectedOption);

try {
  let apiUrl = "/api/products";

  // If there are selected options, add them to the URL
  if (selectedCategory && selectedOption.length > 0) {
    apiUrl += `?${selectedCategory}=${selectedOption.join(",")}`;
  }

  const data = await api.get(apiUrl);

  dispatch({ type: FIND_PRODUCT_SUCCESS, payload: data });
} catch (error) {
  dispatch({ type: FIND_PRODUCT_FAILURE, payload: error.message });
}
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

  const { productId } = reqData;

  try {
    const data = await api.get(`/api/products/id/${productId}`);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
