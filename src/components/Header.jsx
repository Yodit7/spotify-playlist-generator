import "../css/header.css";
import { BsSpotify, BsList } from "react-icons/bs";

export function Header() {
  return (
    <>
      <div className="header">
        <div className="headline">
          <div className="logo">
            <BsSpotify />
          </div>
          <h2>Spotify Playlist Generator</h2>
        </div>
        <ul className="nav">
          <li className="nav-item menu-icon"><BsList /></li>
          <li className="nav-item">
            <a href="" className="nav-link btn-main">
              Generate
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link btn-main">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
