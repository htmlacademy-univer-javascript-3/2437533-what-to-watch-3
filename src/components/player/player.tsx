import {FilmType} from '../../types/film-type';
import {useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import {PlayerButton} from './player-button';
import cn from 'classnames';

export type VideoPlayerProps = {
  films: FilmType[];
}

export function Player({films}: VideoPlayerProps) {
  const params = useParams();
  const paramsId = parseInt(params.id || '1', 10);
  const movie = films.find((f) => f.id === paramsId) || films[0];

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const playerElement = videoRef.current;

    if (!playerElement) {
      return;
    }

    if (isPlaying) {
      playerElement.play();
      return;
    }

    playerElement.pause();
  }, [isPlaying]);
  return (
    <div className="player">
      <video src={movie.videoLink} className="player__video" poster={movie.filmImg}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <PlayerButton height={'19'} width={'19'} xlinkHref={cn({'#play-s': !isPlaying},
            {'#pause': isPlaying})} nameButton={cn({'Play': !isPlaying}, {'Pause': isPlaying})}
          className={'player__play'} setIsPlaying={setIsPlaying} isPlaying={isPlaying}
          />
          <div className="player__name">Transpotting</div>
          <PlayerButton height={'27'} width={'27'} xlinkHref={'#full-screen'} nameButton={'Full screen'}
            className={'player__full-screen'} setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
          />
        </div>
      </div>
    </div>
  );
}
