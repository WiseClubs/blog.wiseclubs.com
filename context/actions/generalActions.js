export const generalActions = (props) => {
  return {
    increment: () => {
      props.dispatch({type: "INCREMENT"});
    },
    decrement: () => {
      props.dispatch({type: "DECREMENT"});
    },
    reset: () => {
      props.dispatch({type: "RESET"});
    },
    setValue: (data) => {
      // props.dispatch({ type: "SET_VALUE", data });
      externSetValue(props, data);
    }
  }
}

function externSetValue(props, data) {
  props.dispatch({type: "SET_VALUE", data});
}

export const appActions = (props) => {
  return {
    setAppSettings: (INITIAL_SETTINGS) => {
      props.dispatch({type: 'SET_APP_SETTINGS_LOADING', payload: true});
      props.dispatch({type: "FETCH_APP_APP_SETTINGS_SUCCESS", payload: {...INITIAL_SETTINGS[0]}});
    },
    getAppSettings: () => {
      props.dispatch({type: 'SET_APP_SETTINGS_LOADING', payload: true});
    }
  }
}
