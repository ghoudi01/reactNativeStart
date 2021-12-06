import Actions from './actionConstants';
import * as Handler from './reducer';
import {Appearance} from 'react-native';
const ACTION_HANDLERS = {
  [Actions.UPDATE_TEST]: Handler.handlerUpdateTest,
  [Actions.UPDATE_LANGUAGE]: Handler.handlerupdateLanguage,
 
};
const initialState = {
  test: 'test',
  language:"en"
};

export function HomeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
