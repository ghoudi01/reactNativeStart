import React from "react"
import { connect } from "react-redux";
import { compose } from "redux";
import { withTranslation } from 'react-i18next';

import {
Box,
Radio,
Button} from "native-base";
import {Content,Header} from "components"
import images from "assests/images"
import styles from "./styles"

class {{properCase name}} extends React.Component {
constructor(props) {
super(props);
this.state = {};

}

componentDidMount() {

}

render() {

    return (

    <Box flex={1}>
        <Header title={this.props.t("Home")} />
        <Content>
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

}

}
const mapDispatchToProps = {
 
}
export default compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps))({{properCase name}});
