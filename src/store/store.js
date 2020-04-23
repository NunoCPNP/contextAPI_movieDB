import React, { createContext, useReducer } from 'react'

const initialState = {
  movies: [],
  wishlist: [],
  isSideBarOpen: false,
}

const store = createContext(initialState)
store.displayName = 'ContextGlobalState'

const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'GET_MOVIES':
        return {
          ...state,
          movies: [...state.movies, ...action.payload],
        }

      case 'RESET_MOVIES':
        return {
          ...state,
          movies: [],
        }

      case 'ADD_TO_WISHLIST':
        const item = state.movies.filter((movie) => movie.id === action.payload)[0]
        const wishlist = [...state.wishlist, item]

        localStorage.setItem('WishList', JSON.stringify(wishlist))

        return {
          ...state,
          wishlist,
        }

      case 'REMOVE_FROM_WISHLIST':
        const filteredList = state.wishlist.filter((item) => item.id !== action.payload)

        localStorage.setItem('WishList', JSON.stringify(filteredList))

        return {
          ...state,
          wishlist: [...filteredList],
        }

      case 'GET_WHISLIST_FROM_STORAGE':
        let savedWishlist
        const storedWishlist = JSON.parse(localStorage.getItem('WishList'))

        if (storedWishlist === null) {
          savedWishlist = []
        } else {
          savedWishlist = storedWishlist
        }

        return {
          ...state,
          wishlist: [...savedWishlist],
        }

      case 'TOGGLE_SIDEBAR':
        return {
          ...state,
          isSideBarOpen: !state.isSideBarOpen,
        }

      default:
        return state
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
