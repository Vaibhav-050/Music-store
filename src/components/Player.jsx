import '../styles.css';


export const Player = ({ fn, song }) => {
  return (
    <div className="player-container">
      <button
        onClick={() => {
          fn(false, null);
        }}
        className="btn btn-success"
      >
        Back to Songs
      </button>
      <div className="player-details">
        <p>
          Details
          <br />
          Singer Name: {song?.artistName}
          <br />
          Song Name/Category: {song?.trackName}
        </p>
        <br />
        <img src={song.artworkUrl100} alt="" />
      </div>
      <div className="audio-controls">
        <audio controls>
          <source src={song?.previewUrl} type="audio/mp4" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};
