import { createContext, useReducer, useContext } from 'react'
import { getLocationSearch } from 'utils'

const initialState = {
  showService: false,
  serviceIndex: 0,
  caseName: getLocationSearch('name'),
  showMenu: false,
  menuDirection: 1,
  isMenuOpen: false,
  isDataReady: false
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_SHOW_SERVICE':
      return {
        ...state,
        showService: action.showService
      }
    case 'SET_SERVICE_INDEX':
      return {
        ...state,
        serviceIndex: action.serviceIndex
      }
    case 'SET_CASE_NAME':
      return {
        ...state,
        caseName: action.caseName
      }
    case 'SET_SHOW_MENU':
      return {
        ...state,
        showMenu: action.showMenu || false
      }
    case 'SET_MENU_DIRECTION':
      return {
        ...state,
        menuDirection: action.menuDirection
      }
    case 'SET_MENU_OPEN':
      return {
        ...state,
        isMenuOpen: action.isMenuOpen
      }
    case 'SET_DATA_READY':
      return {
        ...state,
        isDataReady: action.isDataReady
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

export const serviceIndexAction = (dispatch, serviceIndex) => dispatch({
  type: 'SET_SERVICE_INDEX',
  serviceIndex
})

export const caseNameAction = (dispatch, caseName) => dispatch({
  type: 'SET_CASE_NAME',
  caseName
})

export const showMenuAction = (dispatch, showMenu) => dispatch({
  type: 'SET_SHOW_MENU',
  showMenu
})

export const menuDirectionAction = (dispatch, menuDirection) => dispatch({
  type: 'SET_MENU_DIRECTION',
  menuDirection
})

export const isMenuOpenAction = (dispatch, isMenuOpen) => dispatch({
  type: 'SET_MENU_OPEN',
  isMenuOpen
})

export const isDataReadyAction = (dispatch, isDataReady) => dispatch({
  type: 'SET_DATA_READY',
  isDataReady
})
