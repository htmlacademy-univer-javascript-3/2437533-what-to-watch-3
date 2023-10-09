import {MainPage} from '../../pages/main-page/main-page';

export type AppProps = {
  name: string;
  genre: string;
  trailerDateRelease: number;

}

export function App({name, genre, trailerDateRelease}: AppProps) {
  return (
    <div>
      <MainPage name={name} genre={genre} trailerDateRelease={trailerDateRelease}/>
    </div>);
}
