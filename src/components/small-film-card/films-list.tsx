import {JSX} from 'react';
import SmallFilmCard from './small-film-card';
import {Film} from '../../mocks/films';
import { useState } from 'react';

type FilmsListProps = {
  mainFilmId: number;
  films: Film[];
}


export function FilmsList({mainFilmId, films}: FilmsListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setOnMouseFilm] = useState(-1);

  return (
    <div className="catalog__films-list" >
      {
        films.map((film) => {
          if (film.id !== mainFilmId) {
            return(
              <SmallFilmCard filmId={film.id} key={film.name} name={film.name} imgSrc={film.filmImg} onFilmCard={(id) => {
                setOnMouseFilm(id);
              }}
              />);
          }
        }
        )
      }
    </div>
  );
}
