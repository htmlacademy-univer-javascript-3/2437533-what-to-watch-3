import {JSX, useEffect} from 'react';
import {FilmCardNav} from '../../../components/film-card-nav/film-card-nav';
import {ReviewsCol} from '../../../components/review/reviews-col';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {FilmCardHero} from '../../../components/film-card-hero/film-card-hero';
import {PageContent} from '../../../components/page-content/page-content';
import {useParams} from 'react-router-dom';
import {
  fetchCurrentFilmAction,
  fetchReviewsAction,
  fetchSimilarFilmsAction
} from '../../../store/api-actions';
import {setCurrentFilm} from '../../../store/action';
import {LoadingScreen} from '../../loading-screen/loading-screen';


export function MovieReviewsPage(): JSX.Element {
  const id = useParams().id || '';
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.currentFilm);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);
  const reviews = useAppSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(fetchCurrentFilmAction(id));
    dispatch(fetchSimilarFilmsAction(id));
    dispatch(fetchReviewsAction(id));
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

              <div className="film-card__reviews film-card__row">
                <ReviewsCol reviews={reviews.slice(0, Math.ceil(reviews.length / 2))}></ReviewsCol>
                <ReviewsCol reviews={reviews.slice(Math.ceil(reviews.length / 2))}></ReviewsCol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageContent similarFilms={similarFilms}></PageContent>
    </>
  );
}
