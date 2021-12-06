 

inDev=__DEV__
 const loginData={
    email:inDev?"test":"",
    password:inDev?"test":""
} 

 const devURL = "https://dev-xxxx.xxx:8000/api/v1/";
 
 const prodURL = "https://pp-xxxx.xxxx:8000/api/v1/";

const baseURL=inDev?devURL:prodURL;
export {loginData,baseURL,devURL,prodURL}