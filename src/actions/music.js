// ACTION TYPE GET_MUSICS_LIST
export const GET_MUSICS_LIST = 'GET_MUSICS_LIST';
// Get music list in the store
export const getMusicsList = () => ({
  type: GET_MUSICS_LIST,
});

// ACTION TYPE SET_MUSICS_LIST
export const SET_MUSICS_LIST = 'SET_MUSICS_LIST';
// Set music list from api to the store
export const setMusicsList = (musicList) => ({
  type: SET_MUSICS_LIST,
  musicList,
});