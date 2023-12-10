import {FilmType} from '../../types/film-type';
import {AppRoutes} from '../../consts/appRoutes';
import {Tab} from '../tab/tab';

type FilmCardNavProps = {
  film: FilmType;
}

export function FilmCardNav({film}: FilmCardNavProps): JSX.Element {
  return(
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <Tab link={AppRoutes.Films.replace(':id', film.id.toString())} tabName={'Overview'}></Tab>
        <Tab link={AppRoutes.Details.replace(':id', film.id.toString())} tabName={'Details'}></Tab>
        <Tab link={AppRoutes.Reviews.replace(':id', film.id.toString())} tabName={'Reviews'}></Tab>
      </ul>
    </nav>
  );
}
