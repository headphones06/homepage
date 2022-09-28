import React from "react";
import { Link } from "react-router-dom";
import "../Style/Menu.scss";

//始めの<div>にclassNameがついていないが、
//コンポーネントとして引っ張る先でclassNameを付けているので注意

export function Menu() {
  return (
    <div>
      <p>メニュー</p>
      <nav>
        <ul className="menu__list">
          <li className="menu__item">
            <Link to={"/info"} className="link">
              自己紹介
            </Link>
          </li>
          <li className="menu__item">
            <Link to={"/works"} className="link">
              作品集
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
