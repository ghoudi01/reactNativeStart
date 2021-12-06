import React from "react"
import { Input, FormControl } from "native-base"
export default InputText = (props) => (
  <FormControl m="3">
    <FormControl.Label>الاميل</FormControl.Label>
    <Input w="100%" h={46} {...props}/>
  </FormControl>
);