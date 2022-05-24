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

// ACTION TYPE GET_USERS_LIST
export const GET_USERS_LIST = 'GET_USERS_LIST';
// Get user list in the store
export const getUsersList = () => ({
  type: GET_USERS_LIST,
});

// ACTION TYPE SET_USERS_LIST
export const SET_USERS_LIST = 'SET_USERS_LIST';
// Get user list in the store
export const setUsersList = (userList) => ({
  type: SET_USERS_LIST,
  userList
});