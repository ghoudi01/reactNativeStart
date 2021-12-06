

import { store } from "./src/redux/createStore";

import { persistStore } from "redux-persist";
import storage from "@react-native-community/async-storage";

import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import "./src/local/index"
import { PersistGate } from "redux-persist/lib/integration/react";
import { NativeBaseProvider, StatusBar } from "native-base"
import Main from "./src/main"
import Theme from "./src/utilits/Theme"

export default class Root extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dataLoaded: false
    }
  }

  initApp() {
    this.setState({ dataLoaded: true })

  }


  render() {
    return (
      <Provider store={store} >
        <PersistGate
          onBeforeLift={() => this.initApp()}
          persistor={persistStore(store)}
          loading={null}
        >
          <NativeBaseProvider theme={Theme}>

            <NavigationContainer>
              {this.state.dataLoaded && (<Main dataLoaded={this.state.dataLoaded} />)}
            </NavigationContainer>
          </NativeBaseProvider>

        </PersistGate>
      </Provider>)
  }
}
