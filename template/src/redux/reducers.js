import {combineReducers} from 'redux';
import {HomeReducer as home} from './home/index';
import {AuthReducer as auth} from './auth';
  export const makeRootReducer = () => {
  return combineReducers({
    home,
     auth,
   });
};

export default makeRootReducer;
