import '../css/login.css'
import { useState, useEffect } from 'react';
import { Main } from './Main';
import SpotifyWebApi from 'spotify-web-api-js';
// import { response } from 'express';
import axios from 'axios';
import { Profile } from './Profile';


export function Login() {
    // const CLIENT_ID = "beb2fcc3ed424ffcbaea89476be42bbc";
    // const REDIRECT_URI = "http://localhost:5173/";
    // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    // const RESPONSE_TYPE = "token";
    // // const SCOPES = "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
    // const SCOPES = ["streaming","user-read-email", "user-read-private", "user-library-read", "user-library-modify", "user-read-playback-state", "user-modify-playback-state"]

    // const [token, setToken] = useState('')
  
    // useEffect(() => {
    //   const hash = window.location.hash
    //   let token = window.localStorage.getItem("token")
  
    //   if(!token && hash){
    //     token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
  
    //     window.location.hash = ""
    //     window.localStorage.setItem("token", token)
    //   }
      
    //   setToken(token)
  
    // }, [])
  
    // const logout = () => {
    //   setToken("")
    //   window.localStorage.removeItem("token")
    // }

    const [spotifyToken, setSpotifyToken] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    const [nowPlaying, setNowPlaying] = useState({})
    const [likedSongs, setLikedSongs] = useState([])
    const [user, setUser] = useState([])
    const [userProfile, setUserProfile] = useState([])

    const spotifyApi = new SpotifyWebApi();

    /**
     * Get Access Token
     */
    const getTokenFromUrl = () => {
        return window.location.hash.substring(1).split("&").reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial;
        }, {})
    }

    useEffect(() => {
        // console.log("This is what we derived from the URL:", getTokenFromUrl())
        const spotifyToken = getTokenFromUrl().access_token;
        window.location.hash = ""
        // console.log("This is our spotify token: ", spotifyToken)

        if(spotifyToken){
            setSpotifyToken(spotifyToken)
            spotifyApi.setAccessToken(spotifyToken)
            spotifyApi.getMe().then((user) => {
                // console.log(user)
                setUser(user)
            })
            setLoggedIn(true)
        }

        getTop()
    })
    console.log(userProfile)
    /**
     * Get Now Playing 
     */
    const getNowPlaying = () => {
        spotifyApi.getMyCurrentPlaybackState().then(response => {
            // console.log(response)
            setNowPlaying({
                name: response.item.name,
                albumArt: response.item.album.images[0].url
            })
        })
    }

    /**
     * Get User's Liked Songs
     */
    const getMyLikedSongs = () => {
        spotifyApi.getMySavedTracks().then(response => {
            console.log(response)
            setLikedSongs(response.items)
        })
    }


    /**
     * Get User Top Tracks
     */
    const getTop = () => {
        spotifyApi.getMyTopTracks().then(response => {
            console.log(response)
        })
    }


    /**
     * Get User Information like Profile Picture
     */
    const getUserInformation = async () => {
        const response = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: `Bearer ${spotifyToken}`
            }
        });
        // console.log("here")
        // console.log("retrieved information:", user);
        setUser(response.data)
    }

    /**
     * player
     */
    const playSong = async () => {
        const response = await axios.get("https://api.spotify.com/v1/me/player/play", {
            headers: {
                Authorization: `Bearer ${spotifyToken}`
            }
        })
        console.log(response);
    }
      
    console.log("here: ", user)
    console.log("login spotify token: ", spotifyToken)

    return (
        <>
            {!loggedIn ? 
                <div className="login-page">
                    {/* <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`}>Login to Spotify</a> */}
                    <a href="http://localhost:8888">Login to Spotify</a>

                </div>
                : 
                <div>
                    <div>
                        <Profile token={spotifyToken}/>
                    </div>
                    <div>
                        {/* <Main spotifyToken={spotifyToken} />
                        {console.log("here:", spotifyToken)} */}
                    </div>

                    <div>
                        {/* <div>Now Playing: {nowPlaying.name}</div>
                        <button onClick={() => getNowPlaying()}>Check Now Playing</button>
                        <img src={nowPlaying.albumArt}/> */}
                    </div>
                </div>
            }
            {loggedIn && (
                <>
                {/* <button onClick={() => getTop()}>Top Tracks</button>
                    <button onClick={() => getMyLikedSongs()}>My Liked Songs</button>
                    {likedSongs.map((song) => (
                        <div key={song.track.id}>
                            <img src={song.track.album.images[0].url} alt={song.track.album.name} />
                            <button onClick={() => playSong()}>Play</button>
                        </div>
                    ))} */}
                </>
            )}
        </>
    )
}