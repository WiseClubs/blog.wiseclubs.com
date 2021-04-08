import {initialState} from "../states/initialStates";
import {
  appSettingsReducer
} from './generalReducer'

const reducer = (state = initialState, action) => {
  return {
    appSettingStates: appSettingsReducer(state.appSettingStates, action)
  }
};

export {initialState, reducer};
