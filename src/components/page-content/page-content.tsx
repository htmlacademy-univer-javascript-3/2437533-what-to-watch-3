import {JSX} from 'react';
import {FilmsList} from '../small-film-card/films-list';
import {Footer} from '../footer/footer';
import {FilmType} from '../../types/film-type';

type PageContentProps = {
  similarFilms: FilmType[];
}

export function PageContent({similarFilms}: PageContentProps): JSX.Element {
  return(
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <FilmsList films={similarFilms}/>
      </section>
      <Footer></Footer>
    </div>
  );
}
