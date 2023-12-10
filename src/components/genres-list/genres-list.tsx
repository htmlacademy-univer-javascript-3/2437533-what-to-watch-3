import {Genre} from '../../consts/genres';
import {GenreItem} from './genre';


export function GenresList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {Object.values(Genre).map((genre) =>(
        <GenreItem genreName={genre} key={genre}/>
      ))}
    </ul>
  );
}
