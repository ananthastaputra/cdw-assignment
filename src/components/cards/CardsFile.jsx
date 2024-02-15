import React from "react";
import "./Card.css";


const Card = ({ name, email, avatarSrc }) => {
    
    return (
        <div className="card">
          <img src={avatarSrc} alt="Avatar" className="avatar" />
          <div className="name">{name}</div>
          <div className="email">{email}</div>
        </div>
      );
}


export default Card;