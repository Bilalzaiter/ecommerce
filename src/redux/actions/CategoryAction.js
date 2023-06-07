import { GET_ALL_CATEGORY, GET_ERROR,GET_ONE_CATEGORY, CREATE_CATEGORY } from '../Types'
import UseGetData from '../../Hooks/UseGetData'
import { UseInsertDataWithImage } from '../../Hooks/UseInsertData'
//get all category
export const GetAllCategory = (limit) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/categories?limit=${limit}`);

        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//get one category with
export const GetOneCategory = (id) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/categories/${id}`);

        dispatch({
            type: GET_ONE_CATEGORY,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

//get all category with pagination
export const GetAllCategoryPage = (page) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/categories?limit=6&page=${page}`);
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}


//get all category with pagination
export const CreateCategory = (formData) => async (dispatch) => {
    try {
        const response = await UseInsertDataWithImage(`/api/v1/categories`, formData);
        dispatch({
            type: CREATE_CATEGORY,
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