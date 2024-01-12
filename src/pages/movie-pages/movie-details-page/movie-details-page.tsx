import {JSX, useEffect} from 'react';
import {FilmCardNav} from '../../../components/film-card-nav/film-card-nav';
import {FilmCardTextCol} from '../../../components/film-card-text-col/film-card-text-col';
import {FilmCardTextRow} from '../../../components/film-card-text-row/film-card-text-row';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {LoadingScreen} from '../../loading-screen/loading-screen';
import {FilmCardHero} from '../../../components/film-card-hero/film-card-hero';
import {PageContent} from '../../../components/page-content/page-content';
import {useParams} from 'react-router-dom';
import {
  fetchCurrentFilmAction,
  fetchSimilarFilmsAction
} from '../../../store/api-actions';
import {setCurrentFilm} from '../../../store/action';


export function MovieDetailsPage(): JSX.Element {
  const id = useParams().id || '';
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.currentFilm);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);


  useEffect(() => {
    dispatch(fetchCurrentFilmAction(id));
    dispatch(fetchSimilarFilmsAction(id));
    return () => {
      dispatch(setCurrentFilm(null));
    };
  }, [dispatch, id, favoriteFilms]);

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
