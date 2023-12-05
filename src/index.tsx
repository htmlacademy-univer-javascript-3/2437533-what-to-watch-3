import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app';
import {mainFilm} from './mocks/main-film';
import {films} from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
    <App mainFilm={mainFilm}
      films={films}
    />
  </React.StrictMode>
);
