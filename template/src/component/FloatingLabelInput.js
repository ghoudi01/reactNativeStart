import React, { Component } from 'react';
import { Animated } from 'react-native';
import { Input, Box, FormControl } from 'native-base';
import { Platform } from 'react-native';

export default class FloatingLabelInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };

    this._animatedIsFocused = new Animated.Value(
      this.props.defaultValue === '' ? 0 : 1
    );
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      duration: 200,
      useNativeDriver: false,
      toValue: this.state.isFocused || this.props.defaultValue !== '' ? 1 : 0,
    }).start();
  }

  render() {
    const { label, ...props } = this.props;
    const lableContainerStyles = {
      position: 'absolute',
      left: 16,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, -7],
      }),
      zIndex: 5,
      paddingLeft: 3,
      paddingRight: 3,
      backgroundColor: "#FFF",
    };
    const AndroidlabelStyle = {
      fontWeight: '500',
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 12],
      }),

      color: this.props.labelColor,
    };
    const IOSlabelStyle = {
      fontWeight: '500',

      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 12],
      }),

      marginTop: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [-3, 0],
      }),
      color: this.props.labelColor,
    };
    return (
      <Box w="100%" mb="4">
        <FormControl isRequired isInvalid={props.slug in props.errors}>

          <Animated.View pointerEvents="none" style={lableContainerStyles}>
            <Animated.Text
              style={
                Platform.OS === 'android' ? AndroidlabelStyle : IOSlabelStyle,
                {color:props.errors[props.slug]?"red":"#000"}
              }
            >
              {label}
            </Animated.Text>
          </Animated.View>
          <Input

            {...props}
            borderRadius="13"
            w="100%"
            h={46}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            _hover={{ bg: "#FFF" }}
          />
          <FormControl.ErrorMessage _text={{ fontSize: 'xs',marginX:"4",marginY:"0" }}>{ props.errors[props.slug]}</FormControl.ErrorMessage>
        </FormControl>
      </Box>
    );
  }
}
