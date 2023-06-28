import "../css/player.css";
import { Profile } from "./Profile";
import { BsPlayCircleFill, BsSkipEndFill, BsSkipStartFill, BsHeartFill, BsFillPlusCircleFill } from "react-icons/bs";


export function Player() {
  return (
    <>
      <div className="player-container">
        <div className="player-header">
            <div className="profile-header">
              <div className="profile-picture"></div>
              <h3>Yodit Ahmed</h3>
              <p>Follower: <span>21</span></p>
              <p>Following: <span>51</span></p>
              <div className="profile-links">
                  <a href="">Liked Songs</a>
                  <a href="">Playlists</a>
              </div>
          </div>
        </div>
        <div className="player-display">
            <div className="player-cover"></div>
            <div className="now-playing-infos">
              <p className="small">Track Name</p>
              <p className="small">TrackArtist</p>
            </div>
            <div className="player-audio-control">
              <button className="btn-icon"><BsSkipStartFill /></button>
              <button className="btn-icon"><BsPlayCircleFill /></button>
              <button className="btn-icon"><BsSkipEndFill /></button>
            </div>
        </div>
      </div>
    </>
  );
}
