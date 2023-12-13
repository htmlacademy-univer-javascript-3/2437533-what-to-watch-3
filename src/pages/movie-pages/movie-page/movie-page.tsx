import {JSX, useEffect} from 'react';
import {Footer} from '../../../components/footer/footer';
import {useParams} from 'react-router-dom';
import {Logo} from '../../../components/logo/logo';
import {UserBlock} from '../../../components/user-block/user-block';
import {FilmCardWrap} from '../../../components/film-card/film-card-wrap';
import {FilmCardNav} from '../../../components/film-card/film-card-nav';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {fetchCommentsAction, fetchCurrentFilmAction, fetchSimilarFilmsAction} from '../../../store/api-actions';
import {FilmsList} from '../../../components/small-film-card/films-list';
import {LoadingScreen} from '../../loading-screen/loading-screen';


export function MoviePage(): JSX.Element {
  const id = useParams().id || '';
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.currentFilm);
  const similarFilms = useAppSelector((state) => state.similarFilms);


  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentFilmAction(id));
      dispatch(fetchSimilarFilmsAction(id));
      dispatch(fetchCommentsAction(id));
    }
  }, [id]);


  if (movie === null) {
    return <LoadingScreen/>;
  }

  return(
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={movie.previewImage} alt={movie.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo></Logo>
            <UserBlock></UserBlock>
          </header>

          <FilmCardWrap film={movie}></FilmCardWrap>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={movie.previewImage} alt={movie.name} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <FilmCardNav film={movie}></FilmCardNav>
              <div className="film-rating">
                <div className="film-rating__score">{movie.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{movie.ratingLevel}</span>
                  <span className="film-rating__count">240 ratings</span>
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

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={similarFilms}/>
        </section>

        <Footer></Footer>
      </div>
    </>
  );
}
