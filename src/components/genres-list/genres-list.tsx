import {GenreItem} from './genre';
import {useAppSelector} from '../../hooks';


export function GenresList(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const tabs = ['All genres', ...new Set(films.map((f) => f.genre))].slice(0, 10);

  return (
    <ul className="catalog__genres-list">
      {Object.values(tabs).map((genre) =>(
        <GenreItem genreName={genre} key={genre}/>
      ))}
    </ul>
  );
}
