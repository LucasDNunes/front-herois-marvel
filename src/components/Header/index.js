import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/marvel.svg';


import './header.css';

export default function Header() {
  return (
      <div className="container">
        <div className="content">
          <Link to="/">
            <img src={logo} alt="Marvel" />
          </Link>
        </div>
      </div>
  );
}
