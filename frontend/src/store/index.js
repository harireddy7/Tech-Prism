import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const getLocalCart = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const getLocalUserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const getLocalShippingAddress = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : null;

const getLocalPaymentMethod = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : null;

const initialState = {
  cart: {
    cartItems: getLocalCart
  },
  userLogin: {
    userInfo: getLocalUserInfo
  },
  userShippingAddress: {
    shippingAddress: getLocalShippingAddress
  },
  userPaymentMethod: {
    paymentMethod: getLocalPaymentMethod
  }
};

const middlewares = [thunk];

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, initialState, enhancer);

export default store;
