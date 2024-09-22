
import {Box} from '@chakra-ui/react';
import './LiveEditorBody.scss'
import CodeEditor from './CodeEditor';


function LiveEditor() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <CodeEditor/>
    
    </Box>
    
    
  )
}

export default LiveEditor