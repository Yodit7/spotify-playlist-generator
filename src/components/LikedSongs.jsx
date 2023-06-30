import { FaRegClock, FaHashtag } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useState } from "react";
import '../css/likedSongs.css'
import { FaEllipsisH } from "react-icons/fa";


export function LikedSongs() {

    const [likedSongs, getLikedSongs] = useState([
        {
            index: '1',
            title: 'Track Name',
            artist: 'Artist Name',
            album: 'Album Name',
            duration: '3:12'
        },
        {
            index: '2',
            title: 'Track Name',
            artist: 'Artist Name',
            album: 'Album Name',
            duration: '3:12'
        },
        {
            index: '3',
            title: 'Track Name',
            artist: 'Artist Name',
            album: 'Album Name',
            duration: '3:12'
        },
        {
            index: '4',
            title: 'Track Name',
            artist: 'Artist Name',
            album: 'Album Name',
            duration: '3:12'
        },
        {
            index: '5',
            title: 'Track Name',
            artist: 'Artist Name',
            album: 'Album Name',
            duration: '3:12'
        },
        {
            index: '6',
            title: 'Track Name',
            artist: 'Artist Name',
            album: 'Album Name',
            duration: '3:12'
        },
        {
            index: '7',
            title: 'Track Name',
            artist: 'Artist Name',
            album: 'Album Name',
            duration: '3:12'
        },
        {
            index: '8',
            title: 'Track Name',
            artist: 'Artist Name',
            album: 'Album Name',
            duration: '3:12'
        },
        {
            index: '9',
            title: 'Track Name',
            artist: 'Artist Name',
            album: 'Album Name',
            duration: '3:12'
        },
        {
            index: '10',
            title: 'Track Name',
            artist: 'Artist Name',
            album: 'Album Name',
            duration: '3:12'
        }
    ])

    return (
        <>
        <div className="likedSongs-container">
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
                            <p className="center-item">{likedSong.index}</p>
                            <div className="likedSong-title">
                                <div className="likedSong-img">
                                </div>
                                <div className="likedSong-title-details center-item">
                                    <p className="medium">{likedSong.title}</p>
                                    <p className="normal">{likedSong.artist}</p>
                                </div>
                            </div>
                            <p className="item-medium">{likedSong.album}</p>
                            <p>{likedSong.duration}</p>
                            <p className="center-item"><FaEllipsisH /></p>
                      </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}