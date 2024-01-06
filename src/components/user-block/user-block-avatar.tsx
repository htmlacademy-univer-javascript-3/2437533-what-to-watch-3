import {useAppSelector} from '../../hooks';
import { Link } from 'react-router-dom';
import {AppRoutes} from '../../consts/appRoutes';

export function UserBlockAvatar(): JSX.Element {
  const avatarImg = useAppSelector((state) => state.user?.avatarUrl);

  return(
    <li className="user-block__item">
      <div className="user-block__avatar">
        <Link to={AppRoutes.MyList}>
          <img src={avatarImg} alt="User avatar" width="63" height="63"/>
        </Link>
      </div>
    </li>
  );
}
