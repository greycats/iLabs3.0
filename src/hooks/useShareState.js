import { createContext, useReducer, useContext } from 'react'

const initialState = {
  showService: false
}

function reducer (state, action) {
  switch(action.type) {
    case 'SET_SHOW_SERVICE':
      return {
        ...state,
        showService: action.showService
      }
    default:
      return state
  }
}

export const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)
export default () => useReducer(reducer, initialState)
