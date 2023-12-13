import {JSX, useEffect} from 'react';
import SmallFilmCard from './small-film-card';
import {FilmType} from '../../types/film-type';

type FilmsListProps = {
  films: FilmType[];
}


export function FilmsList({films}: FilmsListProps): JSX.Element {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => { }, [films]);

  return (
    <div className="catalog__films-list" >
      {
        films.map((film) => (
          <SmallFilmCard filmId={film.id} key={film.name} name={film.name} imgSrc={film.previewImage} videoLink={film.previewVideoLink}/>)
        )
      }
    </div>
  );
}
