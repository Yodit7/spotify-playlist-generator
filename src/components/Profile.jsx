import '../css/profile.css'
import { FaHeart, FaEllipsisH, FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';



export function Profile({spotifyToken}) {
    const [topTracks, setTopTracks] = useState({})
    const [isTokenValid, setIsTokenValid] = useState(false)

    const spotifyApi = new SpotifyWebApi();


    useEffect(() => {
        checkTokenValidity();
        getTopTracks();
    })
    
    const checkTokenValidity = () => {
        spotifyApi.getMe()
          .then(() => {
            setIsTokenValid(true);
            console.log("valid")
          })
          .catch((error) => {
            setIsTokenValid(false);
            console.log("Token validation error:", error);
          });
      };

      const getTopTracks = async () => {
        try {
          const response = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
            headers: {
              Authorization: `Bearer ${spotifyToken}`
            }
          });
          console.log(response.data); // Log the response data
          setTopTracks(response.data);
        } catch (error) {
          console.log("Error message:", error.response); // Log the error response
        }
      };
      

    // const getProfilePicture = () => {
    //     const response = 
    // }

    console.log("profile token: ", spotifyToken)
    return (
        <>
            <div className="profile-section">
                <div className="profile-container">
                    <div className='profile-header'>
                        {/* <img src="" alt="" /> */}
                        <div className='profile-picture'></div>
                        <p className='profile-header-title'>Yodit Ahmed</p>
                    </div>
                    <div className="profile-header-infos">
                        <p>Follower: <span>21</span></p> 
                        <p>Following: <span>51</span></p>
                        <p className='center-line'>
                            <FaHeart /> 
                            Songs: <span>1500</span>
                        </p>
                    </div>
                </div>
                <div className="profile-main">
                    <div className="top-artist">
                        <div className="top-header">
                            <p className='top-title'>Top Tracks</p>
                            <button>See more</button>
                        </div>
                        <ul className='top-list'>
                            <li>
                                <div className='list-item-left'>
                                    <div className='top-track-img'></div>
                                    <div className='top-track-names'>
                                        <p>Track Name</p>
                                        <p>Track Artists</p>
                                        <p className="small">3:12</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='list-item-left'>
                                    <div className='top-track-img'></div>
                                    <div className='top-track-names'>
                                        <p>Track Name</p>
                                        <p>Track Artists</p>
                                        <p className="small">3:12</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='list-item-left'>
                                    <div className='top-track-img'></div>
                                    <div className='top-track-names'>
                                        <p>Track Name</p>
                                        <p>Track Artists</p>
                                        <p className="small">3:12</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='list-item-left'>
                                    <div className='top-track-img'></div>
                                    <div className='top-track-names'>
                                        <p>Track Name</p>
                                        <p>Track Artists</p>
                                        <p className="small">3:12</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='list-item-left'>
                                    <div className='top-track-img'></div>
                                    <div className='top-track-names'>
                                        <p>Track Name</p>
                                        <p>Track Artists</p>
                                        <p className="small">3:12</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='list-item-left'>
                                    <div className='top-track-img'></div>
                                    <div className='top-track-names'>
                                        <p>Track Name</p>
                                        <p>Track Artists</p>
                                        <p className="small">3:12</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='list-item-left'>
                                    <div className='top-track-img'></div>
                                    <div className='top-track-names'>
                                        <p>Track Name</p>
                                        <p>Track Artists</p>
                                        <p className="small">3:12</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='list-item-left'>
                                    <div className='top-track-img'></div>
                                    <div className='top-track-names'>
                                        <p>Track Name</p>
                                        <p>Track Artists</p>
                                        <p className="small">3:12</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='list-item-left'>
                                    <div className='top-track-img'></div>
                                    <div className='top-track-names'>
                                        <p>Track Name</p>
                                        <p>Track Artists</p>
                                        <p className="small">3:12</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='list-item-left'>
                                    <div className='top-track-img'></div>
                                    <div className='top-track-names'>
                                        <p>Track Name</p>
                                        <p>Track Artists</p>
                                        <p className="small">3:12</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="top-tracks">
                        <div className="top-header">
                            <p className='top-title'>Top Artists</p>
                            <button>See more</button>
                        </div>
                        <ul className='top-list-artist'>
                            <li>
                                <div className='top-artist-img'></div>
                                <p className='top-name'>Artist 1</p>
                            </li>
                            <li>
                                <div className='top-artist-img'></div>
                                <p className='top-name'>Artist 2</p>
                            </li>
                            <li>
                            <div className='top-artist-img'></div>
                                <p className='top-name'>Artist 3</p>
                            </li>
                            <li>
                            <div className='top-artist-img'></div>
                                <p className='top-name'>Artist 4</p>
                            </li>
                            <li>
                            <div className='top-artist-img'></div>
                                <p className='top-name'>Artist 5</p>
                            </li>
                            <li>
                            <div className='top-artist-img'></div>
                                <p className='top-name'>Artist 6</p>
                            </li>
                            <li>
                            <div className='top-artist-img'></div>
                                <p className='top-name'>Artist 7</p>
                            </li>
                            <li>
                            <div className='top-artist-img'></div>
                                <p className='top-name'>Artist 8</p>
                            </li>
                            <li>
                            <div className='top-artist-img'></div>
                                <p className='top-name'>Artist 9</p>
                            </li>
                            <li>
                            <div className='top-artist-img'></div>
                                <p className='top-name'>Artist 10</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='generate-button'>
                    <button className='btn'>Generate Playlist<FaChevronDown /></button>
                </div>
            </div>
        </>
    )
}