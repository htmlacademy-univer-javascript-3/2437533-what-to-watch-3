import {JSX, useEffect} from 'react';
import SmallFilmCard from './small-film-card';
import {useAppSelector} from '../../hooks';

type FilmsListProps = {
  mainFilmId: number;
}


export function FilmsList({mainFilmId}: FilmsListProps): JSX.Element {
  const films = useAppSelector((state) => state.films);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => { }, [films]);

  return (
    <div className="catalog__films-list" >
      {
        films.map((film) => {
          if (film.id !== mainFilmId) {
            return(
              <SmallFilmCard filmId={film.id} key={film.name} name={film.name} imgSrc={film.previewImage} videoLink={film.previewVideoLink}/>);
          }
        }
        )
      }
    </div>
  );
}
