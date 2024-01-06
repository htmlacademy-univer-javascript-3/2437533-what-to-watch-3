import {FilmType} from '../../types/film-type';
import {Logo} from '../logo/logo';
import {UserBlock} from '../user-block/user-block';
import {FilmCardWrap} from './film-card-wrap';

type FilmCardHeroProps = {
  movie: FilmType;
}

export function FilmCardHero({movie}: FilmCardHeroProps): JSX.Element {
  return(
    <div className="film-card__hero">
      <div className="film-card__bg">
        <img src={movie.backgroundImage} alt={movie.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo></Logo>
        <UserBlock></UserBlock>
      </header>

      <FilmCardWrap film={movie}></FilmCardWrap>
    </div>
  );
}
