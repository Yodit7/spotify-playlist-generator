import { Profile } from './Profile';
import { Generator } from "./Generator";
import { LikedSongs } from './LikedSongs';
import { Playlist } from './Playlist';
import { Player } from './Player';



export function Main({spotifyToken}) {

    console.log("main spotify token: ", spotifyToken)

    return (
      <>
      <div className="main-part">
        <Profile spotifyToken={spotifyToken}/>
        <Generator spotifyToken={spotifyToken} />    
        <LikedSongs />
        <Playlist />
      </div>
      <div className="side-part">
        <Player />
      </div>
      </>
    );
}
