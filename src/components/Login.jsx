import '../css/login.css'
import { useState, useEffect } from 'react';
import { Main } from './Main';
import SpotifyWebApi from 'spotify-web-api-js';
// import { response } from 'express';
import axios from 'axios';
import { Profile } from './Profile';


export function Login() {
    const [spotifyToken, setSpotifyToken] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    
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
        const spotifyToken = getTokenFromUrl().access_token;
        window.location.hash = ""

        if(spotifyToken){
            setSpotifyToken(spotifyToken)
            spotifyApi.setAccessToken(spotifyToken)
            // spotifyApi.getMe().then((user) => {
            //     // console.log(user)
            //     setUser(user)
            // })
            setLoggedIn(true)
        }
    })

    return (
        <>
            {!loggedIn ? 
                <div className="login-page">
                    <a href="http://localhost:8888">Login to Spotify</a>
                </div>
                : 
                <div>
                    <Main spotifyToken={spotifyToken} />
                </div>
            }
        </>
    )
}