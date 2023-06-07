import { CREATE_SUB_CATEGORY, GET_SUB_CATEGORY, GET_ERROR } from '../Types'
import UseGetData from '../../Hooks/UseGetData'
import { UseInsertData } from '../../Hooks/UseInsertData'

//gcreate sub category with pagination
export const CreateSubCategory = (data) => async (dispatch) => {
    try {
        const response = await UseInsertData("/api/v1/subcategories", data);
        dispatch({
            type: CREATE_SUB_CATEGORY,
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

//get sub category depend in cat id
export const GetOneCategory = (id) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/categories/${id}/subcategories`);
       
        dispatch({
            type: GET_SUB_CATEGORY,
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