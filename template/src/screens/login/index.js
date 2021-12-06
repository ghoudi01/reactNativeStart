import { Box, Center, Heading, StatusBar, KeyboardAvoidingView, Button, Link,Spinner } from "native-base";
import React from "react"
import { Keyboard,  } from "react-native";
import { withTranslation } from 'react-i18next';
import { compose } from "redux";
import { connect } from "react-redux";
import Validator, { loginRoles } from "../../utilits/validator"
import { Content, Header, InputText, FloatingLabelInput } from "../../component"
import {loginData} from "../../utilits/env"
import api from "../../utilits/api";
import {saveDataUser} from "../../redux/auth/actions"
import jwt_decode from "jwt-decode";
import images from "assests/images"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: loginData.email,
            password: loginData.password,
            errors: {},
            loading:false
        };
    }

    
    login = () => {
        Keyboard.dismiss()
        let validation = new Validator(this.state, loginRoles);
        if (validation.fails()) { this.setState({ errors: validation.errors.all() }) }

        else {
            this.setState({loading:true})
            api.post("login",this.state).then(res=>{
                var decoded = jwt_decode(res.data.token);
                decoded.token = res.data.token;
                decoded.refresh_token = res.data.refresh_token;
                 this.props.saveDataUser(decoded);
                this.setState({loading:false})
            }).catch(err=>console.log(err.response))
        }

    }
    render() {


        return (
            <Box flex={1} >
                <Header withoutBorder />
                <Content px="2" >



                    <KeyboardAvoidingView behavior="padding" flex={1}>
                        <Center flex={1}>
                            <Heading mb="3">{this.props.t("login")}</Heading>
                            <FloatingLabelInput
                                slug="email"
                                errors={this.state.errors}
                                label={this.props.t("email")}
                                defaultValue={this.state.email}
                                onChangeText={(txt) => this.setState({ email: txt })}

                            />
                            <FloatingLabelInput
                                slug="password"
                                errors={this.state.errors}
                                label={this.props.t("password")}
                                defaultValue={this.state.password}
                                onChangeText={(txt) => this.setState({ password: txt })}

                            />

                            <Link 
                                _text={{
                                    fontSize: "xs",
                                    fontWeight: "500",
                                    color:"primary.300",
                                }}
                                alignSelf="flex-start"
                                ml="3"
                                mp="3"
                            >
                                {this.props.t("Forget Password")}
                            </Link>

                            <Button disabled={this.state.loading} mt="10" onPress={this.login} >
                                {this.state.loading?  <Spinner color="#FFF" />: this.props.t("login")}
                            </Button>

                        </Center>



                    </KeyboardAvoidingView>



                </Content>

            </Box>
        );
    }
}


const mapStateToProps = (state) => {
    return {

    }

}
const mapDispatchToProps = {
    saveDataUser
}
export default compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps))(Login);
