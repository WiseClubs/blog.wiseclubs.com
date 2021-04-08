export const appSettingStates = {
  loading: true,
  error: '',
  environment: "dev",
  force_upgrade: false,
  is_active: true,
  version: "v1",
  can_clear_cache: false,
  env: {
    name: "dev",
    services: []
  }
};

export const appSettingsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_APP_SETTINGS_LOADING':
      return {...state, loading: action.payload};
    case 'FETCH_APP_APP_SETTINGS_SUCCESS':
      console.log("appSettingsReducer", {...state, ...action.payload, loading: false, error: ''});
      return {...state, ...action.payload, loading: false, error: ''}
    case 'FETCH_APP_APP_SETTINGS_ERROR':
      return {...appSettingStates, loading: false, services: [], error: 'Cant\'t fetch notes'}
    default:
      return state;
  }
}
