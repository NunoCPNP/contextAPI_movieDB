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
        
        return {
          ...state,  
          movies: [...action.payload]
        }

      case 'ADD_TO_WISHLIST':
        const item = state.movies.filter((movie) => movie.id === action.payload)[0]

        return {
          ...state,
          wishlist: [...state.wishlist, item]
        }

      default:
        return state;
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }