import React, {useRef, useEffect} from 'react';

interface CodeRunnerProps {
  code: string;
  language: string;
}

export const CodeRunner: React.FC<CodeRunnerProps> = ({code, language}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const javascriptDoc = `
    <!DOCTYPE html>
    <html lang="en"
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Code Runner</title>
      </head>

      <body>
        <script>
          try {
            ${code}
          } catch (error) {
            document.body.innerHTML = '<pre>' + error + <</pre>';
          }
          
        </script>

      </body>
    </html>
  `;

  const pythonDoc = `
  <!DOCTYPE html>
  <html lang="en"
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Code Runner</title>
    </head>

    <body>
      <script src="https://cdn.jsdelivr.net/pyodide/v0.18.0/full/pyodide.js"></script>
      <script>
        const async runPython = () => {
          let pyodide = await loadPyodide();

          try {
            await pyodide.runPythonAsync(\`${code.replace(/`/g, '\\`')}\`);
          } catch (error) {
            document.body.innerHTML = '<pre>' + error + '</pre>';
          }
        };

        runPython();        
      </script>

    </body>
  </html>
`;

  useEffect(() => {
    const iframe = iframeRef.current;

    if(iframe) {
      const document = iframe.contentDocument;
      
      let documentContents: string;

      if (language === 'javascript') {
        documentContents = javascriptDoc;
      } else if (language === 'python') {
        documentContents = pythonDoc;
      }

      document?.open();
      document?.write(documentContents);
      document?.close();

    }
  }, [code, language]);

  return (
    <iframe
      ref={iframeRef}
      // srcDoc={srcDoc}
      title='code runner'
      sandbox='allow-scripts'
      style={{
        width: '100%',
        height: '400px',
        border: 'none'
      }} />
  );
};
