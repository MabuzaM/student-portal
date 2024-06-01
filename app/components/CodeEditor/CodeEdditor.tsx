import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import './CodeEditor.scss';

interface CodeEditorProps {
  initialCode: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ initialCode }) => {
  const [code, setCode] = useState(initialCode);
  return (
    <LiveProvider code={code} noInline>
      <LiveEditor onChange={(newCode) => setCode(newCode)}/>
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};
