import Actions from './actionConstants';
import AsyncStorage from "@react-native-community/async-storage";


export function updateLanguage(payload) {
  AsyncStorage.setItem("language",payload)
  //use if you need to start the app with rtl ask ghoudi31@gmail.com how it work for more info
  return (dispatch, store) => {
    dispatch({
      type: Actions.UPDATE_LANGUAGE,
      payload: payload,
    });
  };
}


export function updateTest(payload) {
  return (dispatch, store) => {
    dispatch({
      type: Actions.UPDATE_TEST,
      payload: payload,
    });
  };
}
