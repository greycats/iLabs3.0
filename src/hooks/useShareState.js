import { createContext, useReducer, useContext } from 'react'

const initialState = {
  showService: false,
  serviceImage: ''
}

function reducer (state, action) {
  switch(action.type) {
    case 'SET_SHOW_SERVICE':
      return {
        ...state,
        showService: action.showService
      }
    case 'SET_SERVICE_IMAGE':
      return {
        ...state,
        serviceImage: action.serviceImage
      }
    default:
      return state
  }
}

export const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)
export default () => useReducer(reducer, initialState)

export const serviceAction = (dispatch, showService) => dispatch({
  type: 'SET_SHOW_SERVICE',
  showService
})

export const serviceImageAction = (dispatch, serviceImage) => dispatch({
  type: 'SET_SERVICE_IMAGE',
  serviceImage
})
