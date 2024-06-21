import React, { useState } from 'react';
import { CodeRunner } from '../CodeRunner/CodeRunner';
import { CodeEditor } from '../CodeEditor/CodeEditor';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';


export const CodeEditorAndRunner = () => {
  const [code, setCode] = useState('//Write your code below this comment\nconsole.log("Hello, World!");');
  const [runCode, setRunCode] = useState(code);
  const [language, setLanguage] = useState('javascript');

  const handleRunCode = (e) => {
    e.preventDefault();
    setRunCode(code);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setCode(newLanguage === 'javascript'
      ? '// Write your code here\nconsole.log("Hello, World!");'
      : '# Write your code here\nprint("Hello, World!");');
  };

  return (
    <article className="CodeEditorAndRunner">
      <LanguageSelector language={language} onChange={handleLanguageChange} />
      <CodeEditor initialCode={code} onCodeChange={setCode} language={language} />
      <button onClick={handleRunCode}>Run Code</button>
      { runCode && <CodeRunner code={runCode} language={language} /> }   
    </article>
  );
};
