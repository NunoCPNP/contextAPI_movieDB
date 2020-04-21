import React, {createContext, useReducer} from 'react';

const initialState = {
  movies: [],
  wishlist: []
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'GET_MOVIES':
        
        return{
          ...state,  
          movies: [...action.payload]
        }

      default:
        return state;
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }