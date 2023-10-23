import {Link} from 'react-router-dom';
import {JSX} from 'react';


export function NotFoundPage(): JSX.Element {
  return(
    <>
      <h1>
        404.
        <small>Page not found</small>
      </h1>
      <Link to="/">Go to main page</Link>
    </>
  );
}
