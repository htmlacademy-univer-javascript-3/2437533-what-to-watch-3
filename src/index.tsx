import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app';
import {Settings} from './mocks/settings';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App name={Settings.name} genre={Settings.genre} trailerDateRelease={Settings.trailerDateRelease}/>
  </React.StrictMode>
);
