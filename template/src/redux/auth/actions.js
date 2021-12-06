import Actions from './actionConstants';
import {api} from '../../utils/api';
import {InitPusher} from '../chat/actions';

export function saveDataUser(data) {
  return (dispatch, store) => {
    dispatch({
      type: Actions.LOGIN,
      payload: data == 'ERROR' ? {} : data,
    });
  };
}

export function logOut() {
  
  return (dispatch, store) => {
    dispatch({
      type: Actions.LOGOUT,
      payload: {},
    });
  };
}
