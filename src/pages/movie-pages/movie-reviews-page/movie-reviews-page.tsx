import {JSX} from 'react';
import {FilmCardNav} from '../../../components/film-card/film-card-nav';
import {ReviewsCol} from '../../../components/review/reviews-col';
import {useAppSelector} from '../../../hooks';
import {FilmCardHero} from '../../../components/film-card/film-card-hero';
import {PageContent} from '../../../components/page-content/page-content';


export function MovieReviewsPage(): JSX.Element {
  const movie = useAppSelector((state) => state.currentFilm);
  const reviews = useAppSelector((state) => state.reviews);
  const similarFilms = useAppSelector((state) => state.similarFilms);

  if (movie === null) {
    return <div/>;
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
