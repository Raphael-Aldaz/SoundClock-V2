// ACTION TYPE SET_USER_FIELD
export const SET_USER_FIELD = 'SET_USER_FIELD';
// Get music list in the store
export const setUserField = (name, value) => ({
  type: SET_USER_FIELD,
  name,
  value
});

// ACTION TYPE LOGIN
export const LOGIN = 'LOGIN';

// ACTION CREATOR login
export const login = () => ({
  type: LOGIN,
});

// ACTION TYPE LOGIN
export const IS_LOGED = 'IS_LOGED';

// ACTION CREATOR login
export const isLoged = () => ({
  type: IS_LOGED,
});

// ACTION TYPE TOGGLE_SETTINGS
export const LOGGOUT = 'LOGGOUT';

// ACTION CREATOR toggleSettings
export const loggOut = () => ({
  type: LOGGOUT,
});