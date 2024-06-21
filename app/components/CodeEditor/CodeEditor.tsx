import React, { useEffect, useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import './CodeEditor.scss';

interface CodeEditorProps {
  initialCode: string;
  onCodeChange: (code: string) => void;
  language: string;
}

export const CodeEditor:React.FC<CodeEditorProps> = ({initialCode, onCodeChange, language}) => {
  const [code, setCode] = useState(initialCode);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const mode = language === 'javascript' 
    ? 'javascript' 
    : language === 'python' 
    ? 'python' 
    : 'javascript';

  return (
    <CodeMirror
      key={code}
      value={code}
      options={{
        mode: mode,
        theme: 'material',
        lineNumbers: true,
      }}
      onBeforeChange={(editor, data, value) => {
        setCode(value);
        onCodeChange(value);
      }}

      onChange={(editor, data, value) => {
        setCode(value);
        onCodeChange(value);
      }}
    />

  );
};

