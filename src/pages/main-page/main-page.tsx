import {JSX, useEffect} from 'react';
import {Footer} from '../../components/footer/footer';
import {GenresList} from '../../components/genres-list/genres-list';
import {Logo} from '../../components/logo/logo';
import {UserBlock} from '../../components/user-block/user-block';
import {FilmsListSorted} from '../../components/small-film-card/films-list-sorted';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {ShowMoreButton} from '../../components/show-more-button/show-more-button';
import {Genre} from '../../consts/genres';
import {PlayButton} from '../../components/play-button/play-button';
import {AddToListButton} from '../../components/add-to-list-button/add-to-list-button';
import {InListButton} from '../../components/in-list-button/in-list-button';
import {resetCurrVisibleCount} from '../../store/action';


export function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const mainFilm = useAppSelector((state) => state.mainFilm);
  const currentVisibleCount = useAppSelector((state) => state.currentGenreVisibleCount);
  const currGenre = useAppSelector((state) => state.genre);
  const currentGenreCount = useAppSelector((state) => state.films).filter((f) =>
    f.genre === currGenre || currGenre === Genre.All).length;
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => () => {
    dispatch(resetCurrVisibleCount());
  }, [authStatus, dispatch]);

  if (mainFilm === null) {
    return <div/>;
  }

  return(
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={mainFilm.backgroundImage} alt={mainFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo></Logo>
          <UserBlock></UserBlock>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={mainFilm.posterImage} alt={mainFilm.name.concat(' ', 'poster')} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{mainFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{mainFilm.genre}</span>
                <span className="film-card__year">{mainFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton id={mainFilm.id.toString()}></PlayButton>
                {mainFilm.isFavorite ? (<InListButton id={mainFilm.id}></InListButton>) : (<AddToListButton id={mainFilm.id}></AddToListButton>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList></GenresList>
          <FilmsListSorted />
          {currentVisibleCount < currentGenreCount && (<ShowMoreButton/>)}
        </section>

        <Footer></Footer>
      </div>
    </>
  );
}
