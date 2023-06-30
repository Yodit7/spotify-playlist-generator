import { Profile } from './Profile';
import { Generator } from "./Generator";
import { LikedSongs } from './LikedSongs';
import { Playlist } from './Playlist';




export function Main({spotifyToken}) {

    console.log("main spotify token: ", spotifyToken)

    return (
      <>
        <Profile spotifyToken={spotifyToken}/>
        <Generator spotifyToken={spotifyToken} />    
        <LikedSongs />
        <Playlist />
      </>
    );
}
