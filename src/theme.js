import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
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