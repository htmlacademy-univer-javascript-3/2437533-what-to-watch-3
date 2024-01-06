import {JSX} from 'react';
import {FilmCardNav} from '../../../components/film-card/film-card-nav';
import {FilmCardTextCol} from '../../../components/film-card/film-card-text-col';
import {FilmCardTextRow} from '../../../components/film-card/film-card-text-row';
import {useAppSelector} from '../../../hooks';
import {LoadingScreen} from '../../loading-screen/loading-screen';
import {FilmCardHero} from '../../../components/film-card/film-card-hero';
import {PageContent} from '../../../components/page-content/page-content';


export function MovieDetailsPage(): JSX.Element {
  const movie = useAppSelector((state) => state.currentFilm);
  const similarFilms = useAppSelector((state) => state.similarFilms);

  if (movie === null) {
    return <LoadingScreen/>;
  }

  return(
    <>
      <section className="film-card film-card--full">
        <FilmCardHero movie={movie}></FilmCardHero>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={movie.posterImage} alt={`${movie.name} poster`} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <FilmCardNav film={movie}></FilmCardNav>

              <div className="film-card__text film-card__row">
                <FilmCardTextCol film={movie}></FilmCardTextCol>
                <FilmCardTextRow movie={movie}></FilmCardTextRow>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageContent similarFilms={similarFilms}></PageContent>
    </>
  );
}
