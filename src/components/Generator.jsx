import "../css/generator.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaRegClock, FaHashtag, FaEllipsisH } from "react-icons/fa";
import { RiAiGenerate } from "react-icons/ri";

export function Generator({ spotifyToken }) {
  const [genres, setGenres] = useState([]);
  const [num, setNum] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [songs, setSongs] = useState([]);
  const [generated, setGenerated] = useState(false);

  const getGenres = async (e) => {
    e.preventDefault;

    const response = await axios.get(
      "https://api.spotify.com/v1/recommendations/available-genre-seeds",
      {
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
        },
      }
    );
    setGenres(response.data.genres);
  };

  const getNumOfSongs = (e) => {
    e.preventDefault();
    setNum(e.target.value);
  };

  const playlistGenre = (e) => {
    setSelectedGenre(e.target.value);
  };

  const searchTracksByGenre = async () => {
    console.log(selectedGenre);
    try {
      const seed = generateRandomSeed(); // Generate a random seed
      const timestamp = new Date().getTime();
      const response = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
        },
        params: {
          q: `genre:"${selectedGenre}"`,
          type: "track",
          limit: `${num}`,
          seed: seed,
          timestamp: timestamp,
        },
      });
      setSongs(response.data.tracks.items);
      setGenerated(true);
    } catch (error) {
      console.log("Error searching tracks:", error);
    }
  };

  const generateRandomSeed = () => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let seed = "";

    for (let i = 0; i < 10; i++) {
      seed += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return seed;
  };

  const savePlaylist = async () => {
    try {
      const timestamp = new Date().getTime();
      const playlistName = `Generated Playlist - ${timestamp}`;
  
      // Step 1: Create a new playlist
      const createPlaylistResponse = await axios.post(
        `https://api.spotify.com/v1/me/playlists`,
        {
          name: playlistName,
        },
        {
          headers: {
            Authorization: `Bearer ${spotifyToken}`,
          },
        }
      );
  
      const playlistId = createPlaylistResponse.data.id;
  
      // Step 2: Add songs to the playlist
      const trackUris = songs.map((song) => song.uri);
      await axios.post(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          uris: trackUris,
        },
        {
          headers: {
            Authorization: `Bearer ${spotifyToken}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      // Step 3: Display success message
      console.log("Playlist saved successfully!");
    } catch (error) {
      console.log("Error saving playlist:", error);
    }
  };
  

  return (
    <>
      <div className="main-container" id="generate">
        <div className="container">
          <div className="container-item">
            <label htmlFor="genre-select">Select a Genre:</label>
            <select name="genres" onClick={getGenres} onChange={playlistGenre}>
              <option>Select...</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
          <div className="container-item">
            <label>How many songs should be in your playlist?</label>
            <input
              type="text"
              placeholder="number"
              value={num}
              onChange={getNumOfSongs}
            />
          </div>
          <div className="container-item container-item-medium">
            <button
              className="btn-main btn-main-icon"
              onClick={searchTracksByGenre}
            >
              Generate <RiAiGenerate />
            </button>
          </div>
        </div>
        {generated ? (
          <div className="container-display">
            <div className="container-display-header">
              <FaHashtag />
              <p>Title</p>
              <p>Album</p>
              <FaRegClock />
            </div>

            <div className="container-display-header-medium">
              <FaHashtag />
              <p>Title</p>
              <FaEllipsisH />
            </div>
            <hr />
            <ul className="container-display-list">
              {songs.map((song) => (
                <li className="container-display-item">
                  <p className="center-item">{songs.indexOf(song) + 1}</p>
                  <div className="track-details">
                    <img
                      src={song.album.images[1].url}
                      className="track-cover"
                    />
                    <div className="track-title-details">
                      <p className="track-name medium">{song.name}</p>
                      <p className="track-artist normal">
                        {song.artists.map((artist, index) => (
                          <div key={index}>{artist.name}</div>
                        ))}
                      </p>
                    </div>
                  </div>
                  <p>{song.album.name}</p>
                  <p>
                    {Math.floor(song.duration_ms / 1000 / 60)}:
                    {((song.duration_ms / 1000) % 60).toFixed(0)} min
                  </p>
                  <p className="center-item">
                    <FaEllipsisH />
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div></div>
        )}

        {generated ? (
          <div className="playlist-add">
            <button className="btn-main" onClick={savePlaylist}>Save Playlist</button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
