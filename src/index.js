import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return <h1>Hello, React 18!</h1>;
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);