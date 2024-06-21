import React from 'react';

interface LanguageSelectorProps {
  language: string;
  onChange: (language: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({language, onChange}) => {
  return (
    <select
      value={language}
      name="language"
      id="language"
      className="LanguageSelector"
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="javascript">JavaScript</option>
      <option value="python">Python</option>
    </select>
  );
};
