import React from "react";
export const HelperContext = React.createContext();

const inintalState = {
	isAuth: false,
	user: null,
  loading: true,
  error: null,
  data: [],
  total: 0,
  page: 1,
  searchValue: '',
  cartItems: [],
	cartTotal: 0,
};

const reducer = (state, action) => {
  const { type, payload } = action;
	switch (type) {
		case "LOGIN":
			return {
				...state,
				isAuth: true,
				user: payload,
			};
		case "LOGOUT":
			return {
				...state,
				isAuth: false,
				user: null,
			};
		case "LOADING":
			return {
				...state,
				loading: false,
			};
		case "ERROR":
			return {
				...state,
				loading: false,
				error: payload,
			};
		case "SUCCESS":
			return {
				...state,
				loading: false,
				data: payload,
			};
		case "TOTAL":
			return {
				...state,
				loading: false,
				total: payload,
			};
		case "PAGE":
			return {
				...state,
				loading: false,
				page: payload,
			};
		case "SEARCH":
			return {
				...state,
				loading: false,
				searchValue: payload,
			};
		case "ADD_TO_CART":
			return {
				...state,
				loading: false,
				cartItems: [payload, ...state.cartItems],
			};
		case "CART_TOTAL": 
		return {
			...state,
				loading: false,
				cartTotal: payload
		}
		default:
			return state;
	}
};

const HelperProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, inintalState);
	return (
		<HelperContext.Provider value={{ state, dispatch }}
    >{children}</HelperContext.Provider>
	);
};

export default HelperProvider;
