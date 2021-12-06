import Validator from 'validatorjs';
import ar from 'validatorjs/src/lang/ar';
Validator.setMessages('ar', ar);

//validator.setAttributeNames({ password: '' });

 
 export const loginRoles = {
    email: 'required|email',
    password: 'required|min:6',
   
  };
 
  export default Validator;