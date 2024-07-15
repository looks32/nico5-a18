import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <h1>logo</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/comingsoon">comingsoon</Link>
            </li>
            <li>
                <Link to="/nowplaying">nowplaying</Link>
            </li>
        </ul>
    </header>
  );
}
