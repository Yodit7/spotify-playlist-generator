import "../css/profile.css";
import { FaHeart, FaEllipsisH, FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import axios from "axios";

export function Profile({ spotifyToken }) {
  
  const [topTracks,setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([])
  const [me, setMe] = useState([])
  const spotifyApi = new SpotifyWebApi();


  useEffect(() => {
    getTopTracks()
    getTopArtists()
    getProfilePicture()
  }, []);

  /**
   * Get Profile Picture
   */
  const getProfilePicture = async () => {
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${spotifyToken}`
      }
    });
    setMe(response.data)
  }

  /**
   * Get Top Tracks
   */
  const getTopTracks = async () => {
    const response = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
        headers: {
          Authorization: `Bearer ${spotifyToken}`
        }, 
        params: {
          limit: '10'
        }
      });
      setTopTracks(response.data.items)
  }

  /** 
   * Get Top Artists
   */
  const getTopArtists = async () => {
    const response = await axios.get("https://api.spotify.com/v1/me/top/artists", {
        headers: {
          Authorization: `Bearer ${spotifyToken}`
        }, 
        params: {
          limit: '10'
        }
      });
      setTopArtists(response.data.items)
  }


  return (
    <>
      {me.images && me.images.length > 0 && (
        <div className="profile-header">
          <div className="profile-picture">
            <img src={me.images[0].url} className="profile-picture"/>
          </div>
          <h3>{me.display_name}</h3>
        </div>
      )}
      {me.followers && (
        <div className="profile-header-infos">
          <div className="profile-stats">
              <p>Followers: <span>{me.followers.total}</span></p>
              <p>Following: <span>51</span></p>
          </div>
          <div className="profile-links">
              <a href="#likedSongs">Liked Songs</a>
              <a href="#playlists">Playlists</a>
          </div>
        </div>
      )}
      <div className="profile-overview">
        <div className="top-tracks">
          <div className="top-header">
            <h4 className="top-title">Top Tracks</h4>
            <button className="btn-more">See more</button>
          </div>
          <ul className="top-list" key="1">
            {topTracks.map((topTrack) => (
              <li className="list-item" key={topTrack.id}>
                {/* <div className="list-item-left"> */}
                  <img
                    src={topTrack.album.images[0].url}
                    style={{ height: "50px", width: "50px" }}
                  />
                  {/* <div className="top-track-img">
                    {topTrack.cover}
                  </div> */}
                  <div className="top-track-names">
                    <p className="medium">
                      {/* {topTrack.title} */}
                      {topTrack.name}
                    </p>
                    <p className="normal">
                      {/* {topTrack.artist} */}
                      {topTrack.artists[0].name}
                    </p>
                    <p className="small">
                      {/* {topTrack.duration} */}
                      {Math.floor(topTrack.duration_ms / 1000 / 60)}:
                      {((topTrack.duration_ms / 1000) % 60).toFixed(0)} min
                    </p>
                  </div>
                {/* </div> */}
              </li>
            ))}
          </ul>
        </div>
        <div className="top-artist">
          <div className="top-header">
            <h4 className="top-title">Top Artists</h4>
            <button className="btn-more">See more</button>
          </div>
          <ul className="top-list" key="2">
            {topArtists.map((topArtist) => (
              <li className="list-item" key={topArtist.id}>
                {/* <div className="top-artist-img"></div> */}
                <img
                    src={topArtist.images[0].url}
                    style={{ height: "60px", width: "60px" }}
                />                
                <p className="medium list-item-name">{topArtist.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="generate-button">
        <button className="btn-main btn-main-icon">
          <a href="#generate" className="generate-link">Generate Playlist
          <FaChevronDown /></a>
        </button>
      </div>
    </>
  );
}
