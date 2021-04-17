import { ActionType } from '../action-types';

interface SearchProductsAction {
  type: ActionType.SEARCH_PRODUCTS;
}

interface SearchProductsSuccessAction {
  type: ActionType.SEARCH_PRODUCTS_SUCCESS;
  payload: string[];
}

interface SearchProductsErrorAction {
  type: ActionType.SEARCH_PRODUCTS_ERROR;
  payload: string;
}

export type Action =
  | SearchProductsAction
  | SearchProductsSuccessAction
  | SearchProductsErrorAction;
