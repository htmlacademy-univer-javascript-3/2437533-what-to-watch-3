import {useAppSelector} from '../../hooks';

export function UserBlockAvatar(): JSX.Element {
  const avatarImg = useAppSelector((state) => state.user?.avatarUrl);

  return(
    <li className="user-block__item">
      <div className="user-block__avatar">
        <img src={avatarImg} alt="User avatar" width="63" height="63"/>
      </div>
    </li>
  );
}
