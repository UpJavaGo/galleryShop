import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { productReducer , productDetailsReducer} from './reducer/productReducer';

const reducer= combineReducers ({
    products:productReducer,
    productDetails: productDetailsReducer
})

let initialState = {}

const midddleware = [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...midddleware)))

export default store;