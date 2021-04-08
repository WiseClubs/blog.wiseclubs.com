import {
  appActions
} from './generalActions'

export const useActions = (state, dispatch) => {
  return {
    appActions: appActions({state, dispatch})
  }
};
