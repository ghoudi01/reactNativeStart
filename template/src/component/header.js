import {
    Button,
    HStack,
    VStack,
    Text,
    Link,
    Checkbox,
    Divider,
    Image,

    IconButton,
    Icon,
    Pressable,
    Center,
    Hidden,
    StatusBar,
    Stack,
    Box,
    Heading,
    useColorModeValue
} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign"
import React from "react"
function Header(props) {



    return (
        <>
            <StatusBar barStyle={useColorModeValue("dark-content", "light-content")}  />

            <Box safeAreaTop _dark={{ bg: "#000" }} _light={{ bg: "#FFF" }} />

            <HStack 
            borderBottomColor={useColorModeValue("#000", "#FFF")} 
            borderBottomWidth={props.withoutBorder?"0":"1"} 
            _dark={{ bg: "#000" }} _light={{ bg: "#FFF" }} 
            px="2"
             py="2" 
            justifyContent="flex-start" 
            alignItems='center'>
                {props.goBack && (<IconButton translate onPress={() => props.goBack()} _icon={{
                    as: AntDesign,
                    name: "arrowright",

                }} />)}
                {props.title && (<Heading >{props.title}</Heading>)}


            </HStack>
        </>
    );

}

export default Header;