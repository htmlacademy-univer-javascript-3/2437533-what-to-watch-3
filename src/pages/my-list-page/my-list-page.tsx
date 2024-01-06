import {JSX} from 'react';
import {FilmsList} from '../../components/small-film-card/films-list';
import {Footer} from '../../components/footer/footer';
import {useAppSelector} from '../../hooks';
import {Logo} from '../../components/logo/logo';
import {UserBlock} from '../../components/user-block/user-block';

export function MyListPage(): JSX.Element {
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo></Logo>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>
        <UserBlock></UserBlock>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favoriteFilms}/>
      </section>

      <Footer></Footer>
    </div>
  );
}
