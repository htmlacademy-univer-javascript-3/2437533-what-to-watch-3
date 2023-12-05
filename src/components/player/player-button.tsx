type PlayerButtonProps = {
  height: string;
  width: string;
  xlinkHref: string;
  nameButton: string;
  className: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setIsPlaying: Function;
  isPlaying: boolean;
}

export function PlayerButton({height, width, xlinkHref, nameButton, className, setIsPlaying, isPlaying}: PlayerButtonProps) {
  return (
    <button className={className} type="button"
      /* eslint-disable-next-line
            @typescript-eslint/no-unsafe-return */
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`} width={width} height={height}
      >
        <use xlinkHref={xlinkHref}></use>
      </svg>
      <span>{nameButton}</span>
    </button>
  );
}
