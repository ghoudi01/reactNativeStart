import React from "react"
import { connect } from "react-redux";
import { compose } from "redux";
import { withTranslation } from 'react-i18next';

import {
    Box,
    Radio,
    Button
} from "native-base";
import { Content, Header } from "components"
import images from "assests/images"
import styles from "./styles"

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {

    }
    handleSelect = (language) => {
        this.props.updateLanguage(language)
        setTimeout(() => {
          reloadApp(language)
        }, 300);
      };

    render() {

        return (

            <Box flex={1}>
                <Header title={this.props.t("Home")} />
                <Content>
                    <Box w={90} h={90} bg="#FFF">
                        <Radio.Group
                            onChange={(value) => this.handleSelect(value)}
                            value={this.props.language}

                        >
                            <Radio value="ar" >
                                ar
                            </Radio>
                            <Radio value="en">en</Radio>
                        </Radio.Group>
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
export default compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps))(Settings);
