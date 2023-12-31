import {AppRoutes} from '../../consts/appRoutes';
import {Link} from 'react-router-dom';

type PlayButtonProps = {
  id: string;
}

export function PlayButton({id}: PlayButtonProps): JSX.Element {
  return(
    <Link to={AppRoutes.Player.replace(':id', id)} className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link>
  );
}
