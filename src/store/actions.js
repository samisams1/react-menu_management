// actions.js
import axios from 'axios';
import { API_URL } from '../services/api';

export const FETCH_MENU_ITEMS_REQUEST = 'FETCH_MENU_ITEMS_REQUEST';
export const FETCH_MENU_ITEMS_SUCCESS = 'FETCH_MENU_ITEMS_SUCCESS';
export const FETCH_MENU_ITEMS_FAILURE = 'FETCH_MENU_ITEMS_FAILURE';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const EXPAND_ALL = 'EXPAND_ALL';
export const COLLAPSE_ALL = 'COLLAPSE_ALL';
export const CREATE_MENU_ITEM = 'CREATE_MENU_ITEM';
 
const CREATEURL = "menus/";
const FETCHURL = "menus"
export const fetchMenuItems = () => async (dispatch) => {
  dispatch({ type: FETCH_MENU_ITEMS_REQUEST });
  try {
    const response = await axios.get(API_URL+FETCHURL );
    dispatch({ type: FETCH_MENU_ITEMS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_MENU_ITEMS_FAILURE, payload: 'Failed to fetch menu items' });
  }
};
export const createMenu = (formData) => async (dispatch) => {
    try {
      const response = await axios.post(API_URL +CREATEURL, formData);
      dispatch({ type: CREATE_MENU_ITEM, payload: response.data });
    } catch (error) {
      console.error('Error creating menu:', error);
      throw error;
    }
}
export const toggleMenu = (menuId) => ({
  type: TOGGLE_MENU,
  payload: menuId,
});

export const expandAll = () => ({
  type: EXPAND_ALL,
});

export const collapseAll = () => ({
  type: COLLAPSE_ALL,
});