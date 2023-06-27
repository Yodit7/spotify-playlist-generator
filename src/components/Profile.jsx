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
        artist: "Teddy Afro"
    },
    {
        cover: "Cover",
        artist: "Teddy Afro"
    },
    {
        cover: "Cover",
        artist: "Teddy Afro"
    },
    {
        cover: "Cover",
        artist: "Teddy Afro"
    },
    {
        cover: "Cover",
        artist: "Teddy Afro"
    },
    {
        cover: "Cover",
        artist: "Teddy Afro"
    },
    {
        cover: "Cover",
        artist: "Teddy Afro"
    },
    {
        cover: "Cover",
        artist: "Teddy Afro"
    },
    {
        cover: "Cover",
        artist: "Teddy Afro"
    },
    {
        cover: "Cover",
        artist: "Teddy Afro"
    },
  ]);

  const spotifyApi = new SpotifyWebApi();

  useEffect(() => {
    getTopTracksWithRetry();
  }, []);

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
      <div className="profile-header">
        <div className="profile-picture"></div>
        <p className="profile-header-title">Yodit Ahmed</p>
      </div>
      <div className="profile-header-infos">
        <div className="profile-stats">
            <p>
            Follower: <span>21</span>
            </p>
            <p>
            Following: <span>51</span>
            </p>
            <p className="center-line">
            Liked Songs: <span>1500</span>
            </p>
        </div>
        <div className="profile-links">
            <a href="">Liked Songs</a>
            <a href="">Playlists</a>
            {/* <a href="">Your Shows</a> */}
        </div>
      </div>
      <div className="profile-overview">
        <div className="top-tracks">
          <div className="top-header">
            <p className="top-title">Top Tracks</p>
            <button>See more</button>
          </div>
          <ul className="top-list" key="1">
            {topTracks.map((topTrack) => (
              <li key={topTrack.id}>
                <div className="list-item-left">
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
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="top-artist">
          <div className="top-header">
            <p className="top-title">Top Artists</p>
            <button>See more</button>
          </div>
          <ul className="top-list" key="2">
            {topArtists.map((topArtist) => (
              <li className="list-item" key={topArtist.id}>
                <div className="top-artist-img"></div>
                <p className="medium">{topArtist.artist}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="generate-button">
        <button className="btn">
          Generate Playlist
          <FaChevronDown />
        </button>
      </div>
    </>
  );
}

// const getProfilePicture = () => {
//     const response =
// }

/**
 * Get Now Playing
 */
//   const getNowPlaying = () => {
//     spotifyApi.getMyCurrentPlaybackState().then(response => {
//         // console.log(response)
//         setNowPlaying({
//             name: response.item.name,
//             albumArt: response.item.album.images[0].url
//         })
//     })
// }

/**
 * Get User's Liked Songs
 */
// const getMyLikedSongs = () => {
//     spotifyApi.getMySavedTracks().then(response => {
//         console.log(response)
//         setLikedSongs(response.items)
//     })
// }
