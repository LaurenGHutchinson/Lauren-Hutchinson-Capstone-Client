import React from 'react'
import {ChakraProvider} from '@chakra-ui/react';
import './LiveEditor.scss';
import theme from '../../../theme.js'
import LiveEditorBody from '../LiveEditorBody/LiveEditorBody.jsx'

function LiveEditor() {
  return (
    <ChakraProvider theme={theme}>
        <LiveEditorBody />
    </ChakraProvider>
  )
}

export default LiveEditor