import { applyMiddleware, createStore } from "@reduxjs/toolkit"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import RootReducer from './reducers/RootReducer'





const initialState = {}
const middleware = [thunk]

const Store = createStore(RootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default Store