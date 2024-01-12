import {JSX, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {FilmCardNav} from '../../../components/film-card-nav/film-card-nav';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {
  fetchCurrentFilmAction,
  fetchSimilarFilmsAction
} from '../../../store/api-actions';
import {LoadingScreen} from '../../loading-screen/loading-screen';
import {FilmCardHero} from '../../../components/film-card-hero/film-card-hero';
import {PageContent} from '../../../components/page-content/page-content';
import {CalculateRatingLevel} from '../../../consts/ratings';
import {setCurrentFilm} from '../../../store/action';


export function MoviePage(): JSX.Element {
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
              <img src={movie.posterImage} alt={movie.name} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <FilmCardNav film={movie}></FilmCardNav>
              <div className="film-rating">
                <div className="film-rating__score">{movie.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{CalculateRatingLevel(movie.rating)}</span>
                  <span className="film-rating__count">{movie.scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{movie.description}</p>

                <p className="film-card__director"><strong>Director: {movie.director}</strong></p>

                <p className="film-card__starring">
                  <strong>{movie.starring}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageContent similarFilms={similarFilms}></PageContent>
    </>
  );
}
