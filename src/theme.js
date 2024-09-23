import {extendTheme} from '@chakra-ui/react';
import './Styles/_fonts.scss'

const theme = extendTheme({
  colors: {
    liveEditor: {
      100: "rgb(42, 45, 55, 0.5)",
    },
  },
    styles: {
        global: {
          'html, body': {
            backgroundColor: '#1e1e1e',  // Default background color
            color: 'white',               // Default text color
          },
        },
      },
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    
})

export default theme;