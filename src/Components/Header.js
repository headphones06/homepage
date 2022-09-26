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
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="headerMenu__item">
            <Link to={"/info"}>自己紹介</Link>
          </li>
          <li className="headerMenu__item">
            <Link to={"/works"}>作品集</Link>
          </li>
        </ul>
      </header>
    </dev>
  );
}
