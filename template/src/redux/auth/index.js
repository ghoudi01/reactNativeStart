import Actions from './actionConstants';
import * as Handler from './reducer';
import {Appearance} from 'react-native';
const ACTION_HANDLERS = {
  [Actions.LOGIN]: Handler.handlerLogin,
  [Actions.LOGOUT]: Handler.handlerLogOut,
};
const initialState = {
  user: {}, //null,
};

export function AuthReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
