import { GET_ALL_BRAND, GET_ONE_BRAND, GET_ERROR, CREATE_BRAND } from '../Types'
import { UseInsertDataWithImage } from '../../Hooks/UseInsertData'
import UseGetData from '../../Hooks/UseGetData';

//get all Brand
export const GetAllBrand = (limit) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/brands?limit=${limit}`);

        dispatch({
            type: GET_ALL_BRAND,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//get one Brand
export const GetOneBrand = (id) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/brands/${id}`);

        dispatch({
            type: GET_ONE_BRAND,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//get all Brand with pagination
export const GetAllBrandPage = (page) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/brands?limit=4&page=${page}`);
        dispatch({
            type: GET_ALL_BRAND,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}


//insert brand with pagination
export const CreateBrand = (formData) => async (dispatch) => {
    try {
        const response = await UseInsertDataWithImage(`/api/v1/brands`, formData);
        dispatch({
            type: CREATE_BRAND,
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