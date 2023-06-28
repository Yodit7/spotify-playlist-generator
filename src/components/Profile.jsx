import "../css/profile.css";
import { FaHeart, FaEllipsisH, FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import axios from "axios";

export function Profile({ spotifyToken }) {
  const [topTracks, setTopTracks] = useState([
    {
      cover: "Track Cover",
      title: "Tom Ford",
      artist: "Lyno Nine8",
      duration: "3:12 min",
    },
    {
      cover: "Track Cover",
      title: "Tom Ford",
      artist: "Lyno Nine8",
      duration: "3:12 min",
    },
    {
      cover: "Track Cover",
      title: "Des Yemil Sikay",
      artist: "Teddy Afro",
      duration: "3:12 min",
    },
    {
      cover: "Track Cover",
      title: "Tom Ford",
      artist: "Lyno Nine8",
      duration: "3:12 min",
    },
    {
      cover: "Track Cover",
      title: "Tom Ford",
      artist: "Lyno Nine8",
      duration: "3:12 min",
    },
    {
      cover: "Track Cover",
      title: "Tom Ford",
      artist: "Lyno Nine8",
      duration: "3:12 min",
    },
    {
      cover: "Track Cover",
      title: "Tom Ford",
      artist: "Lyno Nine8",
      duration: "3:12 min",
    },
    {
      cover: "Track Cover",
      title: "Tom Ford",
      artist: "Lyno Nine8",
      duration: "3:12 min",
    },
    {
      cover: "Track Cover",
      title: "Tom Ford",
      artist: "Lyno Nine8",
      duration: "3:12 min",
    },
    {
      cover: "Track Cover",
      title: "Tom Ford",
      artist: "Lyno Nine8",
      duration: "3:12 min",
    },
  ]);
  const [topArtists, setTopArtists] = useState([
    {
        cover: "Cover",
        name: "Teddy Afro"
    },
    {
        cover: "Cover",
        name: "Teddy Afro"
    },
    {
        cover: "Cover",
        name: "Teddy Afro"
    },
    {
        cover: "Cover",
        name: "Teddy Afro"
    },
    {
        cover: "Cover",
        name: "Teddy Afro"
    },
    {
        cover: "Cover",
        name: "Teddy Afro"
    },
    {
        cover: "Cover",
        name: "Teddy Afro"
    },
    {
        cover: "Cover",
        name: "Teddy Afro"
    },
    {
        cover: "Cover",
        name: "Teddy Afro"
    },
    {
        cover: "Cover",
        name: "Teddy Afro"
    },
  ]);

  const spotifyApi = new SpotifyWebApi();

  useEffect(() => {

  }, []);

  /**
   * Get User's Top Tracks
   */
  const getTopTracksWithRetry = async () => {
    try {
      await getTopTracks();
    } catch (error) {
      if (error.response && error.response.status === 429) {
        const resetTime = error.response.headers["retry-after"] || 0;
        await delay(resetTime * 1000);
        await getTopTracksWithRetry();
      } else {
        console.error(error);
      }
    }
  };

  const getTopTracks = async () => {
    const response = await spotifyApi.getMyTopTracks({ limit: 10 });
    setTopTracks(response.items);
  };

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <>
      {/* <div className="profile-header">
        <div className="profile-picture"></div>
        <h3>Yodit Ahmed</h3>
      </div>
      <div className="profile-header-infos">
        <div className="profile-stats">
            <p>Follower: <span>21</span></p>
            <p>Following: <span>51</span></p>
            <p className="center-line">Liked Songs: <span>1500</span></p>
        </div>
        <div className="profile-links">
            <a href="">Liked Songs</a>
            <a href="">Playlists</a>
        </div>
      </div> */}
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
                  {/* <img
                    src={topTrack.album.images[0].url}
                    style={{ height: "50px", width: "50px" }}
                  /> */}
                  <div className="top-track-img">
                    {/* {topTrack.cover} */}
                  </div>
                  <div className="top-track-names">
                    <p className="medium">
                      {topTrack.title}
                      {/* {topTrack.name} */}
                    </p>
                    <p className="normal">
                      {topTrack.artist}
                      {/* {topTrack.artists[0].name} */}
                    </p>
                    <p className="small">
                      {topTrack.duration}
                      {/* {Math.floor(topTrack.duration_ms / 1000 / 60)}:
                      {((topTrack.duration_ms / 1000) % 60).toFixed(0)} min */}
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
                <div className="top-artist-img"></div>
                {/* <img
                    src={topArtist.images[0].url}
                    style={{ height: "60px", width: "60px" }}
                />                 */}
                <p className="medium">{topArtist.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="generate-button">
        <button className="btn-main btn-main-icon">
          Generate Playlist
          <FaChevronDown />
        </button>
      </div>
    </>
  );
}
