import React from 'react';
import ReactDOM from 'react-dom/client';
import FilmCard from './components/film-card';
import PageContent from './components/page-content';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <FilmCard />
    <PageContent />
  </React.StrictMode>
);
