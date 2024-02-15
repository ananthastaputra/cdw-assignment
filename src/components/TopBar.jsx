import React from 'react';
import './TopBar.css'; // You can define styles in this CSS file

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="left">
        <h1>Team</h1>
      </div>
      <div className="right">
        <input type="text" placeholder="Search..." />
        <button><i className="fa fa-search"></i></button>
      </div>
    </div>
  );
};

export default TopBar;