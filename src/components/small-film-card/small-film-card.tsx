import {JSX} from 'react';

type SmallFilmCardProps = {
  filmId: number;
  imgSrc: string;
  name: string;
  onFilmCard: (id: number) => void;
}

function SmallFilmCard({imgSrc, name, filmId, onFilmCard}: SmallFilmCardProps): JSX.Element {
  const onMouseEnterHandler = () => {
    onFilmCard(filmId);
  };

  const onMouseLeaveHandler = () => {
    onFilmCard(-1);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      <div className="small-film-card__image">
        <img src={imgSrc}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
