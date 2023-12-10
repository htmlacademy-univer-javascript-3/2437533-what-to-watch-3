import {FilmType} from '../../types/film-type';

type FilmCardTextRowProps = {
  movie: FilmType;
}

export function FilmCardTextRow({movie}: FilmCardTextRowProps): JSX.Element {
  return(
    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Run Time</strong>
        <span className="film-card__details-value">{movie.runTime}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Genre</strong>
        <span className="film-card__details-value">{movie.genre}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Released</strong>
        <span className="film-card__details-value">{movie.releaseYear}</span>
      </p>
    </div>
  );
}
