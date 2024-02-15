import React from 'react';
import './TopBar.css'; // You can define styles in this CSS file
import SearchIcon from './SearchIcon';
import { FaSearch } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="left">
        <h1>Team</h1>
      </div>
      <div className="right">
        <input type="text" placeholder="Search..." />
        <button>
            <FaSearch fill='black'/>
        </button>
      </div>
    </div>
  );
};

export default TopBar;