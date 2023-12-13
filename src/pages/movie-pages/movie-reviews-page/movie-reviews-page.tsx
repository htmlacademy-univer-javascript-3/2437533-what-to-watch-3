import {JSX} from 'react';
import {Footer} from '../../../components/footer/footer';
import {Logo} from '../../../components/logo/logo';
import {UserBlock} from '../../../components/user-block/user-block';
import {FilmCardWrap} from '../../../components/film-card/film-card-wrap';
import {FilmCardNav} from '../../../components/film-card/film-card-nav';
import {ReviewsCol} from '../../../components/review/reviews-col';
import {FilmsListSorted} from '../../../components/small-film-card/films-list-sorted';
import {useAppSelector} from '../../../hooks';


export function MovieReviewsPage(): JSX.Element {
  // const params = useParams();
  // const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.currentFilm);
  if (movie === null) {
    return <div/>;
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

              <div className="film-card__reviews film-card__row">

                <ReviewsCol reviews={movie.reviews.slice(0, Math.ceil(movie.reviews.length / 2))}></ReviewsCol>
                <ReviewsCol reviews={movie.reviews.slice(Math.ceil(movie.reviews.length / 2))}></ReviewsCol>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsListSorted />
        </section>

        <Footer></Footer>
      </div>
    </>
  );
}
