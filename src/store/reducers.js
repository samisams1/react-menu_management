// reducers.js
import {
    FETCH_MENU_ITEMS_REQUEST,
    FETCH_MENU_ITEMS_SUCCESS,
    FETCH_MENU_ITEMS_FAILURE,
    TOGGLE_MENU,
    EXPAND_ALL,
    COLLAPSE_ALL,
  } from './actions';
  
  const initialState = {
    menuItems: [],
    loading: false,
    error: null,
    expandedMenus: {},
    expandButtonColor: 'inherit',
    collapseButtonColor: 'inherit',
  };
  
  const menuReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MENU_ITEMS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_MENU_ITEMS_SUCCESS:
        return {
          ...state,
          menuItems: action.payload,
          loading: false,
          expandedMenus: action.payload.reduce((obj, item) => {
            obj[item.id] = false;
            return obj;
          }, {}),
        };
      case FETCH_MENU_ITEMS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case TOGGLE_MENU:
        return {
          ...state,
          expandedMenus: {
            ...state.expandedMenus,
            [action.payload]: !state.expandedMenus[action.payload],
          },
        };
      case EXPAND_ALL:
        return {
          ...state,
          expandedMenus: state.menuItems.reduce((obj, item) => {
            obj[item.id] = true;
            return obj;
          }, {}),
          expandButtonColor: 'black',
          collapseButtonColor: 'inherit',
        };
      case COLLAPSE_ALL:
        return {
          ...state,
          expandedMenus: state.menuItems.reduce((obj, item) => {
            obj[item.id] = false;
            return obj;
          }, {}),
          expandButtonColor: 'inherit',
          collapseButtonColor: 'black',
        };
      default:
        return state;
    }
  };
  
  export default menuReducer;