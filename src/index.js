import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './globalStyles';
import MediasProvider from './contexts/MediasContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MediasProvider>
      <App />
      <GlobalStyle />
    </MediasProvider>
  </React.StrictMode>
);
