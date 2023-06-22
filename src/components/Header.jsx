import '../css/header.css'
import { BsSpotify } from 'react-icons/bs'

export function Header() {
    return (
        <>
            <div className="header">
                <div className='headline'>
                    <div className='icon'><BsSpotify /></div>
                    <h2>Spotify Playlist Generator</h2>
                </div>
                <ul className="nav">
                    <li className="nav-item">Generate</li>
                    <li className="nav-item">Log out</li>
                </ul>
            </div>
        </>
    )
}