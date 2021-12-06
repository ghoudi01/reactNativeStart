import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import makeRootReducer from "./reducers";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import immutableTransform from "redux-persist-transform-immutable";
import storage from "@react-native-community/async-storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import {
  createFilter,
  createBlacklistFilter,
} from "redux-persist-transform-filter";

const log = createLogger({ diff: false, collapsed: true, colors: false });

function createinitStore(initialState = {}) {
  const homeBlackSubsetFilter = createBlacklistFilter(
    'home',
    ['notifications']
  );

  const persistConfig = {
    key: "root",
    storage: storage,
    stateReconciler: autoMergeLevel2,

    transforms: [
     // homeBlackSubsetFilter,
    ],
  };

  const middleware = [thunk, log];

  const enhancers = [];

  const persistReducerr = persistReducer(persistConfig, makeRootReducer());
  const store = createStore(
    persistReducerr,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
  return store;
}
const initialState = window.___INTITIAL_STATE__;
export const store = createinitStore(initialState);
