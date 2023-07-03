import "../css/playlist.css";
import { useEffect, useState } from "react";
import { PiPlaylistFill } from "react-icons/pi";
import SpotifyWebApi from "spotify-web-api-js";
import axios from "axios";


export function Playlist({ spotifyToken }) {

const [playlists, setPlaylists] = useState([]);

  const spotifyApi = new SpotifyWebApi();

  useEffect(() => {
    getPlaylists()
  })


  const getPlaylists = async () => {
    const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
            Authorization: `Bearer ${spotifyToken}`
        }, 
        params: {
            limit: '10'
        }
    })
    setPlaylists(response.data.items);
  }

  return (
    <>
      <div className="playlists-container" id="playlists">
        <div className="section-header-title">
            <PiPlaylistFill className="icon-style"/>
            <h2>Playlists</h2>
        </div>
          <ul className="playlists-section">
            {playlists.length > 0 && 
              playlists.map((playlist) => (
                  <li className="playlist-item" key={playlist.id} onClick={showPlaylistItems()}>
                    {playlist.images.length > 0 && (
                      <img src={playlist.images[0].url} className="playlist-cover"/>
                    )}
                    {playlist.images.length === 0 && (
                      <div className="playlist-cover"><p>Default Cover</p></div>
                    )}
                      <p className="playlist-title">{playlist.name}</p>
                  </li>
              ))}
          </ul>
        <button className="btn-main">Load more</button>
      </div>
    </>
  );
}
