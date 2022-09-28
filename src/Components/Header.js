import React from "react";
import { Link } from "react-router-dom";
import "../Style/Header.scss";

export function Header() {
  return (
    <dev>
      <header>
        <p className="headerTitle">自己紹介HP</p>
        <ul className="headerMenu">
          <li className="headerMenu__item">
            <Link to={"/"} className="link">
              HOME
            </Link>
          </li>
          <li className="headerMenu__item">
            <Link to={"/info"} className="link">
              自己紹介
            </Link>
          </li>
          <li className="headerMenu__item">
            <Link to={"/works"} className="link">
              作品集
            </Link>
          </li>
        </ul>
      </header>
    </dev>
  );
}
