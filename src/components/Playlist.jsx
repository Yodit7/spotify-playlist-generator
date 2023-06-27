import "../css/playlist.css";
import { useState } from "react";

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
        <h3>Playlists</h3>
        <ul className="playlists-section">
            {playlists.map((playlist) => (
                <li className="playlist-item" key={playlist.id}>
                    <div className="playlist-cover"></div>
                    <p className="playlist-title">{playlist.name}</p>
                </li>
            ))}
        </ul>
        <button className="btn-more">Load more</button>
      </div>
    </>
  );
}
