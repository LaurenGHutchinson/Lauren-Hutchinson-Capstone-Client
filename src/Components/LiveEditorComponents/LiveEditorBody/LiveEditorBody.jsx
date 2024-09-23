import {Box} from '@chakra-ui/react';
import CodeEditor from '../CodeEditor/CodeEditor';


function LiveEditor() {
  return (
    <Box bg="liveEditor.100" borderRadius="lg" minH="75vh" mx={6} my={8} px={6} py={8}>
      <CodeEditor/>
    </Box>
    
    
  )
}

export default LiveEditor