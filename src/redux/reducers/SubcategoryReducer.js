import { GET_ERROR, GET_SUB_CATEGORY, CREATE_SUB_CATEGORY } from '../Types'

const inital = {
    subcategory: [],
    loading: true,
}
const SubcategoryReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_SUB_CATEGORY:
            return {
                ...state,
                subcategory: action.payload,
                loading: false,
            }
        case GET_SUB_CATEGORY:
            return {
                subcategory: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                loading: true,
                subcategory: action.payload,
            }
        default:
            return state;
    }
}
export default SubcategoryReducer