import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_PRODUCTS,
    });

    try {
      const { data } = await axios.get(
        'http://localhost:3004/products',
      );
      const items = data;
      dispatch({
        type: ActionType.SEARCH_PRODUCTS_SUCCESS,
        payload: items,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_PRODUCTS_ERROR,
        payload: err.message,
      });
    }
  };
};
