// import "../css/main.css";
import "../css/generator.css";
import { useEffect, useState } from "react";
import axios from 'axios'
import { FaRegClock, FaHashtag } from "react-icons/fa";
import { RxMagicWand } from "react-icons/rx";

export function Generator({spotifyToken}){
    const [searchKey, setSearchKey] = useState("");
    const [artists, setArtists] = useState([]);
    const [genres, setGenres] = useState([])
    const [num, setNum] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("")
    const [songs, setSongs] = useState([])
    const [player, setPlayer] = useState(undefined)
    const [likedSongs, setLikedSongs] = useState({})
  
      // get all genres
      const getGenres = async (e) => {
        e.preventDefault;
  
        const response  = await axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
          headers: {
            Authorization: `Bearer ${spotifyToken}`
          }
        });
        console.log(response.data.genres)
        setGenres(response.data.genres)
      }
      
      const getNumOfSongs = (e) => {
        e.preventDefault()
        setNum(e.target.value)
      }
    
      const playlistGenre = (e) => {
        setSelectedGenre(e.target.value)
      }
      
      const searchTracksByGenre = async () => {
        console.log(selectedGenre)
        // console.log("selected genre:", genres[0])
        try {
          const seed = generateRandomSeed(); // Generate a random seed
          const timestamp = new Date().getTime();
          const response = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
              Authorization: `Bearer ${spotifyToken}`
            },
            params: {
              q: `genre:"${selectedGenre}"`,
              type: 'track',
              limit: `${num}`,
              seed: seed,
              timestamp: timestamp
            },
          });
          
          // const newSongs = response.data.tracks.items;  
          // const randomTracks = response.data.tracks.items;
          console.log(response.data.tracks.items)
          setSongs(response.data.tracks.items);
  
        } catch(error) {
          console.log('Error searching tracks:', error)
        }
      };
  
      const generateRandomSeed = () => {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let seed = ''
  
        for(let i = 0; i < 10; i++) {
          seed += characters.charAt(Math.floor(Math.random() * characters.length))
        }
  
        return seed;
      }
  
  
      const getUserLikedSongs = async () => {
        const response = await axios.get("https://api.spotify.com/v1/me/tracks", {
          headers: {
            Authorization: `Bearer ${spotifyToken}`
          }
        });
        console.log(response)
      }
  


    return (
        <>
         <div className="main-container">
          <div className="container">
            <div className="container-item">
              <label htmlFor="genre-select">Select a Genre:</label>
              <select name="genres" onClick={getGenres} onChange={playlistGenre}>
                <option>Select...</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>
            <div className="container-item">
              <label>How many songs should be in your playlist?</label>
              <input type="text" placeholder="number" value={num} onChange={getNumOfSongs}/>
            </div>
            <div className="container-item">
              <button onClick={searchTracksByGenre}>Generate <RxMagicWand /></button>
                {songs.map((song) => (
                  <div key={song.id}>
                    <p>{song.name}</p>
                    {song.artists.map((artist, index) => (
                      <div key={index}>{artist.name}</div>
                    ))}
                    <img src={song.album.images[1].url} />
                    <button id="togglePlay">Toggle Play</button>

                    <audio controls>
                      <source src={song.external_urls.spotify} type="audio/mpeg" />
                    </audio>
                  </div>
                ))}
            </div>
          </div>
          <div className="container-display">
            <div className="container-display-header">
                <FaHashtag />
                <p>Title</p>
                <p>Album</p>
                <FaRegClock />
            </div>
            <hr />
            <ul className="container-display-list">
              <li className="container-display-item">
                <p>1</p>
                <div className="track-details">
                  <div className="track-cover"></div>
                  <div className="track-title-details">
                    <p className="track-name">Track Name</p>
                    <p className="track-artist">Track Artist</p>
                  </div>
                </div>
                <p>Album Name</p>
                <p>3:12</p>
              </li>
              <li className="container-display-item">
                <p>1</p>
                <div className="track-details">
                  <div className="track-cover"></div>
                  <div className="track-title-details">
                    <p className="track-name">Track Name</p>
                    <p className="track-artist">Track Artist</p>
                  </div>
                </div>
                <p>Album Name</p>
                <p>3:12</p>
              </li>
              <li className="container-display-item">
                <p>1</p>
                <div className="track-details">
                  <div className="track-cover"></div>
                  <div className="track-title-details">
                    <p className="track-name">Track Name</p>
                    <p className="track-artist">Track Artist</p>
                  </div>
                </div>
                <p>Album Name</p>
                <p>3:12</p>
              </li>
              <li className="container-display-item">
                <p>1</p>
                <div className="track-details">
                  <div className="track-cover"></div>
                  <div className="track-title-details">
                    <p className="track-name">Track Name</p>
                    <p className="track-artist">Track Artist</p>
                  </div>
                </div>
                <p>Album Name</p>
                <p>3:12</p>
              </li>
              <li className="container-display-item">
                <p>1</p>
                <div className="track-details">
                  <div className="track-cover"></div>
                  <div className="track-title-details">
                    <p className="track-name">Track Name</p>
                    <p className="track-artist">Track Artist</p>
                  </div>
                </div>
                <p>Album Name</p>
                <p>3:12</p>
              </li>
            </ul>
          </div>
          <div className="playlist-add">
            <button className="btn-add">Add Playlist to My Playlists</button>
          </div>
        </div>
        </>
    )
}

{/* <div>
<button onClick={() => getUserLikedSongs()}>liked songs</button>
</div> */}