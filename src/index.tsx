import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app';
import {mainFilm} from './mocks/main-film';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App mainFilm={mainFilm}/>
  </React.StrictMode>
);
