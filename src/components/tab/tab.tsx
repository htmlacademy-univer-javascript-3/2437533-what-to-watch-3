import {Link} from 'react-router-dom';

type TabProps = {
  link: string;
  tabName: string;
}

export function Tab({link, tabName}: TabProps): JSX.Element {
  return(
    <li className="film-nav__item">
      <Link to={link} className="film-nav__link">{tabName}</Link>
    </li>
  );
}
