import React from "react";
import MainStack from "./navigation/mainStack";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { I18nManager } from "react-native"
import { reloadApp } from "./local"
import SplashScreen from 'react-native-splash-screen'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
  
  componentDidMount() {
    SplashScreen.hide();
  }

   



  render() {
    return (
      <MainStack />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    language: state.home.language,

  };
};

export default compose(withTranslation(), connect(mapStateToProps))(Main);


