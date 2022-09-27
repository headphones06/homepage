import React from "react";
import { Link } from "react-router-dom";
import "../Style/Menu.scss";

export function Menu() {
  return (
    <div className="menu">
      <p>メニュー</p>
      <nav>
        <ul className="menu__list">
          <li className="menu__item">
            <Link to={"/info"}>自己紹介</Link>
          </li>
          <li className="menu__item">
            <Link to={"/works"}>作品集</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
