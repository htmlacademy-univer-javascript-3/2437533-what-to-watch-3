import {JSX} from 'react';
import {Footer} from '../../../components/footer/footer';
import {useParams} from 'react-router-dom';
import {FilmsList} from '../../../components/small-film-card/films-list';
import {Film} from '../../../types/film-type';
import {Logo} from '../../../components/logo/logo';
import {UserBlock} from '../../../components/user-block/user-block';
import {FilmCardWrap} from '../../../components/film-card/film-card-wrap';
import {FilmCardNav} from '../../../components/film-card/film-card-nav';
import {FilmCardTextCol} from '../../../components/film-card/film-card-text-col';
import {FilmCardTextRow} from '../../../components/film-card/film-card-text-row';

type MovieDetailsPageProps = {
  films: Film[];
}

export function MovieDetailsPage({films}: MovieDetailsPageProps): JSX.Element {
  const params = useParams();
  const paramsId = parseInt(params.id || '1', 10);
  const movie = films.find((f) => f.id === paramsId) || films[0];

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
              <img src={movie.filmImg} alt="The Grand Budapest Hotel poster" width="218"
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

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList mainFilmId={movie.id} films={films}/>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
}
