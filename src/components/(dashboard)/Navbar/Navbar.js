"use client";
import "./Navbar.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="burger-menu">
          <img src="/icons/ic_burgermenu.svg" alt="Burger Menu" />
        </div>  
        <div className="search-container">
          <div className="search-box">
            <input type="text" placeholder="Search" className="search-input" />
            <div className="search-icon">
              <img src="/icons/search.svg" alt="Search" />
            </div>
          </div>
        </div>
      </div>

      <div className="nav-right">
        <div className="notification-icon">
          <img src="/icons/notification.svg" alt="Notification" />
        </div>
        <div className="message-icon">
          <img src="/icons/message.svg" alt="Message" />
        </div>
        <div className="user-profile">
          <img
            src="https://imgs.search.brave.com/AKLWGVDoaVAD0toN9oC8yXJh0Kes5gHyeBGTWpgiQ74/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lMC5w/eGZ1ZWwuY29tL3dh/bGxwYXBlcnMvNzE5/LzM0Ni9kZXNrdG9w/LXdhbGxwYXBlci1z/dGF0dWUtb2YtZ29k/LXNvbG8tbGV2ZWxp/bmcuanBn"
            alt="Profile"
            className="avatar"
          />
          <span className="user-name">Admira John</span>
          <img src="/icons/arrow_down.svg" alt="Arrow Down" />
        </div>
        <hr className="divider" />
      </div>
    </nav>
  );
}
