import React from "react";
export const HelperContext = React.createContext();

const inintalState = {
	isAuth: false,
	user: null,
  loading: true,
  error: null,
  data: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;
	switch (type) {
		case "LOGIN":	return {
				...state,
				isAuth: true,
				user: payload,
			};
		case "LOGOUT": return {
				...state,
				isAuth: false,
				user: null,
			};
		case "LOADING": return {
        ...state,
        loading: false,
      };
    case "ERROR": return {
        ...state,
        loading: false,
        error: payload,
      };
    case "SUCCESS": return {
      ...state,
      loading: false,
      data: payload,
    }
    default: return state;
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
