import "../css/playlist.css";
import { useState } from "react";
import { PiPlaylistFill } from "react-icons/pi";

export function Playlist() {

  const [playlists, setPlaylists] = useState([
    {
        name: 'Playlist Name'
    },
    {
        name: 'Playlist Name'
    },
    {
        name: 'Playlist Name'
    },
    {
        name: 'Playlist Name'
    },
    {
        name: 'Playlist Name'
    },
    {
        name: 'Playlist Name'
    },
    {
        name: 'Playlist Name'
    },
    {
        name: 'Playlist Name'
    },
    {
        name: 'Playlist Name'
    },
    {
        name: 'Playlist Name'
    }
  ])


  return (
    <>
      <div className="playlists-container">
        <div className="section-header-title">
            <PiPlaylistFill className="icon-style"/>
            <h2>Playlists</h2>
        </div>
        <ul className="playlists-section">
            {playlists.map((playlist) => (
                <li className="playlist-item" key={playlist.id}>
                    <div className="playlist-cover"></div>
                    <p className="playlist-title">{playlist.name}</p>
                </li>
            ))}
        </ul>
        <button className="btn-main">Load more</button>
      </div>
    </>
  );
}
