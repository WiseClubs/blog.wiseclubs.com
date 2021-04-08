import React, { createContext, useReducer, useEffect } from "react";
import { initialState, reducer } from "../reducers";
import { useActions } from "../actions";

const StoreContext = createContext(initialState);

const StoreProvider = ({INITIAL_SETTINGS, children }) => {
  const [ scrollPos, setScrollPos ] = React.useState(0);

  // environment: "dev",
  // force_upgrade: false,
  // is_active: true,
  // version: "v1",
  // can_clear_cache: false,
  // actions.appActions.setAppSettings(initialPropValue.INITIAL_SETTINGS);
  // actions.appActions.getAppSettings();
  const [state, dispatch] = useReducer(reducer, {...initialState, appSettingStates: INITIAL_SETTINGS[0]});
  const actions = useActions(state, dispatch);

  useEffect(() => console.log('inside store context', { newState: state }), [state]);

  return (
    <StoreContext.Provider value={{ state, dispatch, actions, scrollPos: scrollPos, setScrollPos: setScrollPos }}>
      {children}
    </StoreContext.Provider>
  );

};

// https://github.com/JoseZunigaDyehs/boilerplate-react-hooks
export { StoreContext, StoreProvider };
