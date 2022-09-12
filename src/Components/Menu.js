import React from "react";
import { Link } from "react-router-dom";
import "../Style/Menu.css";

export function Menu() {
  return (
    <div id="menu">
      メニュー
      <nav>
        <ul id="menu-list">
          <li>
            <Link to={"/info"}>自己紹介</Link>
          </li>
          <li>
            <Link to={"/works"}>作品集</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
