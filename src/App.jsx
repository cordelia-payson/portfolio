import React, { useState } from 'react';
import Main from './main/Main.jsx';

export default function App() {
  const [theme, setTheme] = useState('pastel');
  return (
    <div data-theme={theme}>
      <Main theme={theme} setTheme={setTheme} />
    </div>
  );
}
