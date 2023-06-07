import { combineReducers } from 'redux'
import CategoryReducer from './CategoryReducer'
import BrandReducer from './BrandReducer'
import SubcategoryReducer from './SubcategoryReducer'
import ProductsReducer from './ProductsReducer'
export default combineReducers({
    allCategory: CategoryReducer,
    allBrand: BrandReducer,
    subCategory: SubcategoryReducer,
    allproducts: ProductsReducer
})