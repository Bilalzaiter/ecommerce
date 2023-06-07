
import { UseInsertDataWithImage } from '../../Hooks/UseInsertData';
import { DELETE_PRODUCTS, UPDATE_PRODUCTS, CREATE_PRODUCTS, GET_PRODUCT_LIKE, GET_ALL_PRODUCTS, GET_PRODUCT_DETALIS, GET_ERROR } from '../Types'
import UseGetData from '../../Hooks/UseGetData';
import UseDeleteData from '../../Hooks/UseDeleteData';
import { UseInUpdateDataWithImage } from '../../Hooks/UseUpdateData';


//create products with pagination
export const CreateProduct = (formatData) => async (dispatch) => {
    try {
        const response = await UseInsertDataWithImage("/api/v1/products", formatData);
        dispatch({
            type: CREATE_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error  " + e,
        })
    }
}

//get all products with pagination
export const GetAllProducts = (limit) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/products?limit=${limit}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}


//get all products with pagination with pages number
export const GetAllProductsPage = (page, limit) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/products?page=${page}&limit=${limit}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//get all products with query string
export const GetAllProductsSearch = (queryString) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/products?${queryString}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}



//get one product with id
export const GetOneProduct = (id) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/products/${id}`);
        dispatch({
            type: GET_PRODUCT_DETALIS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//get one product with id
export const GetProductLike = (id) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/products?category=${id}`);
        dispatch({
            type: GET_PRODUCT_LIKE,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}


//delete prooduct with id
export const DeleteProducts = (id) => async (dispatch) => {
    try {
        const response = await UseDeleteData(`/api/v1/products/${id}`);
        dispatch({
            type: DELETE_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//update prooduct with id
export const UpdateProducts = (id, data) => async (dispatch) => {
    try {
        const response = await UseInUpdateDataWithImage(`/api/v1/products/${id}`, data);
        dispatch({
            type: UPDATE_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}


