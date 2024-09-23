import { useRef, useState , useEffect} from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "../LanguageSelector/LanguageSelector.jsx";
import next from '../../../assets/Icons/next.png';
import Output from "../Output.jsx";
import axios from 'axios'
import './CodeEditor.scss';

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [editorPage, setEditorPage] = useState('');
  const [debuggingArray, setDebuggingArray] = useState([])
  const [codeChallengeArray, setCodeChallengeArray] = useState([]);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);


  let pageName = window.location.pathname.split('/').pop();
  useEffect(() => {
    setEditorPage(pageName)
  }, [])

  const getCodePrompts = async () => {
    try {
      if (editorPage === 'debugger') {
        const response = await axios.get(`http://localhost:8080/debugger/${language}`);
        setDebuggingArray(response.data);
      
        if (response.data && response.data.length > 0) {
          setValue(response.data[0][language]);
        }
      } else {
        const response = await axios.get("http://localhost:8080/codingChallenge");
        setCodeChallengeArray(response.data);
        setValue(`${response.data[0].question}\n\n//Expected Outcome: ${response.data[0].expectedOutcome}`)
      }
    } catch (error) {
      console.error("Unable to get the coding challenges", error);
    }
  };

  useEffect(() => {
    getCodePrompts()
    setCurrentChallengeIndex(0);
  }, [language, editorPage])

  const handleCompletedChallenge = () => {
    if (currentChallengeIndex < debuggingArray.length - 1) {
      const nextIndex = currentChallengeIndex + 1;
      setCurrentChallengeIndex(nextIndex);
  
      const nextChallenge = debuggingArray[nextIndex]
  
      if (nextChallenge && nextChallenge[language]) {
        setValue(nextChallenge[language]);
      } else {
        console.error("Challenge for the selected language does not exist.");
      }
    } else if(currentChallengeIndex < codeChallengeArray.length -1) {
      const nextIndex = currentChallengeIndex + 1;
      setCurrentChallengeIndex(nextIndex);

      const nextChallenge = codeChallengeArray[nextIndex];
      setValue(nextChallenge.question);
    } else {
      setValue("//You are a coding superstar, come back for more questions in the future.");
    }
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    getCodePrompts();
  };

  return (
    <Box>
      <HStack spacing={4}>
      <button onClick={handleCompletedChallenge}><img className="next-icon" src={next} />Next</button>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="50vh"
            theme="vs-dark"
            language={language}
            defaultValue={value}
            onMount={onMount}
            value={value}
            onChange={(val) => setValue(val)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};
export default CodeEditor;