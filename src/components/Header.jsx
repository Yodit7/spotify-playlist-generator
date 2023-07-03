import "../css/header.css";
import { BsSpotify, BsList, BsFillXCircleFill } from "react-icons/bs";
import { useState } from "react";


export function Header() {
  const [open, setOpen] = useState(true);

  const openMenu = () => {
    setOpen(!open)
  }

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
          <li className="nav-item menu-icon" onClick={() => 
            openMenu()}>{open ? <BsList /> : 
            <div className="menuOpen">
              <BsFillXCircleFill className="menuClose" />
              <ul className="menuBar">
                <li> 
                  <a href="#generate" className="nav-link btn-main">
                  Generate
                  </a>
                </li>
                <li>
                <a href="" className="nav-link btn-main">
                  Log Out
                </a>
                </li>
              </ul>
            </div>}
          </li>
          <li className="nav-item">
            <a href="#generate" className="nav-link btn-main">
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
