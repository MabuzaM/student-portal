import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import './Ide.scss';

interface IdeProps {
  initialCode: string;
}

export const Ide = ({ initialCode = ''}) => {
  const [code, setCode] = useState(initialCode);
  return (
    <LiveProvider code={code} noInline={false}>
      <LiveEditor onChange={(newCode) => setCode(newCode)} className='Ide__live-editor'/>
      <LiveError className='Ide__live-error'/>
      <LivePreview className='Ide__live-preview'/>
    </LiveProvider>
  );
};
