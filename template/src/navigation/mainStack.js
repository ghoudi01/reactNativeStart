import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
 import Home from "../screens/home";
import Login from "../screens/login"
import { connect } from "react-redux";

const Stack = createStackNavigator();
/**
 * this stack created from screen that can opened on form
 */
class MainStack extends React.Component {
  render() {
    return (
      <Stack.Navigator headerMode="none" >
        {!this.props.user.token ?
          
          <Stack.Screen name="Login" component={Login} /> :
          <Stack.Screen name="Home" component={Home} />
           }
     



      </Stack.Navigator>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }

}
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(MainStack);



