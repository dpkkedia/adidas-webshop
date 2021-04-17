import { ActionType } from '../action-types';
import { Action } from '../actions';

interface ProductsState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: ProductsState = initialState,
  action: Action
): ProductsState => {
  switch (action.type) {
    case ActionType.SEARCH_PRODUCTS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_PRODUCTS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_PRODUCTS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
