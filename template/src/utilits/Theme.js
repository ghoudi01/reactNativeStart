import {extendTheme } from 'native-base';
 
const Theme=extendTheme({
    colors: {
        primary: {
            50: '#0e3c61',
            100: '#0e3c61',
            200: '#0e3c61',
            300: '#0e3c61',
            400: '#0e3c61',
            500: '#0e3c61',
            600: '#0e3c61',
            700: '#0e3c61',
            800: '#0e3c61',
            900: '#0e3c61',
          },
          contentbg:{light:"#FFF",dark:"#000"}
    },
    fontSizes: {},
    fonts: {},
    components:{
        Heading: {
            baseStyle: ({ colorMode }) => {
                
              return {
                color: colorMode === 'dark' ? '#FFF' : '#000',
                }
            }
    },
    Button: {
        // Can simply pass default props to change default behaviour of components.
        baseStyle: {
          rounded: 'md',
          w:"100%",
          px:"16",
          h:"46"
        },
        
      },


     
},
    
    config: {
        useSystemColorMode: false,

        initialColorMode: 'light',
    },
})

export default Theme;