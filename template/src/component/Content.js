import React from 'react';
import { ScrollView ,KeyboardAvoidingView,} from "native-base"
function Content(props) {
    return (
        <KeyboardAvoidingView useSafeArea flex={1} _dark={{ bg: "contentbg.dark" }} _light={{ bg: "contentbg.light" }} _contentContainerStyle={{
            padding: "20px",
            mb: "4",
        }}
        {...props}
        >

            {props.children}
        </KeyboardAvoidingView>
    );
}

export default Content;