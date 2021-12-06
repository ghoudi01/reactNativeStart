import React from "react"
import { connect } from "react-redux";
import {

  Box,

  Radio, Button,

} from "native-base";
import Content from "../../component/Content"
import { withTranslation } from 'react-i18next';
import { reloadApp } from "../../local"
import Header from "../../component/header";
import { InputText } from "../../component/inputs"
import { updateLanguage } from "../../redux/home/actions"
import { compose } from "redux";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSelect = (language) => {
    this.props.updateLanguage(language)
    setTimeout(() => {
      reloadApp(language)
    }, 300);
  };
  componentDidMount() {

  }

  render() {

    return (




      <Box flex={1}>
        <Header title={this.props.t("Home")} />
        <Content >


          <Box w={90} h={90} bg="#FFF">

          </Box>


        </Content>





      </Box>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    test: state.home.test,
    language: state.home.language,
  }

}
const mapDispatchToProps = {
  updateLanguage
}
export default compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps))(Home);