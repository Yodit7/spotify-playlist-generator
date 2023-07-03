import { FaRegClock, FaHashtag } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useState, useEffect } from "react";
import '../css/likedSongs.css'
import { FaEllipsisH } from "react-icons/fa";
import axios from "axios";


export function LikedSongs({ spotifyToken }) {

    const [likedSongs, setLikedSongs] = useState([]);

    useEffect(() => {
        getLikedSongs()
    })
    /**
     * Get Liked Songs
     */
    const getLikedSongs = async () => {
        const response = await axios.get("https://api.spotify.com/v1/me/tracks", {
            headers: {
                Authorization: `Bearer ${spotifyToken}`
            }, 
            params: {
                limit: '10'
            }
        })
        setLikedSongs(response.data.items)
    }

    return (
        <>
        <div className="likedSongs-container" id="likedSongs">
            <div className="section-header-title">
                <FcLike className="icon-style"/>  
                <h2>Liked Songs</h2>
            </div>
            <div className="likedSongs-section">
                <div className="likedSongs-container-header">
                    <ul className="header-list">
                        <li className="header-item"><FaHashtag /></li>
                        <li className="header-item">Title</li>
                        <li className="header-item">Album</li>
                        <li className="header-item"><FaRegClock /></li>   
                        <li className="header-item no-show"><FaEllipsisH /></li>    
                    </ul>
                </div>
                <hr />
                <ul className="container-main">
                    {likedSongs.map((likedSong) => (
                        <li className="likedSong-item" key={likedSong.id}>
                            <p className="center-item">{likedSongs.indexOf(likedSong) + 1}</p>
                            <div className="likedSong-title">
                                <div className="likedSong-img">
                                    <img  src={likedSong.track.album.images[0].url} className="likedSong-img" />
                                </div>
                                <div className="likedSong-title-details center-item">
                                    <p className="medium">{likedSong.track.name}</p>
                                    <p className="normal">{likedSong.track.artists[0].name}</p>
                                </div>
                            </div>
                            <p className="item-medium">{likedSong.track.album.name}</p>
                            <p>{Math.floor(likedSong.track.duration_ms / 1000 / 60)}:{((likedSong.track.duration_ms / 1000) % 60).toFixed(0)} min</p>
                            <p className="center-item"><FaEllipsisH /></p>
                      </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}