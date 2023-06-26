import "../css/main.css";
import { Profile } from './Profile';
import { Generator } from "./Generator";


export function Main({spotifyToken}) {

    console.log("main spotify token: ", spotifyToken)

    return (
      <>
        <Profile spotifyToken={spotifyToken}/>
        {/* <Generator spotifyToken={spotifyToken}/>        */}
      </>
    );
}
