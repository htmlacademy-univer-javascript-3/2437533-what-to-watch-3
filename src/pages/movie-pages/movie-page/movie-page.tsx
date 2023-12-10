import {JSX} from 'react';
import {Footer} from '../../../components/footer/footer';
import {useParams} from 'react-router-dom';
import {Logo} from '../../../components/logo/logo';
import {UserBlock} from '../../../components/user-block/user-block';
import {FilmCardWrap} from '../../../components/film-card/film-card-wrap';
import {FilmCardNav} from '../../../components/film-card/film-card-nav';
import {FilmsListSorted} from '../../../components/small-film-card/films-list-sorted';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {changeGenre} from '../../../store/action';


export function MoviePage(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const params = useParams();
  const paramsId = parseInt(params.id || '1', 10);
  const movie = films.find((f) => f.id === paramsId) || films[0];
  const dispatch = useAppDispatch();
  dispatch(changeGenre(movie.genre));
  return(
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={movie.filmImg} alt={movie.name}/>
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
              <img src={movie.filmImg} alt={movie.name} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <FilmCardNav film={movie}></FilmCardNav>
              <div className="film-rating">
                <div className="film-rating__score">{movie.ratingScore}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{movie.ratingLevel}</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{movie.filmDesc}</p>

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
          <FilmsListSorted mainFilmId={movie.id}/>
        </section>

        <Footer></Footer>
      </div>
    </>
  );
}
