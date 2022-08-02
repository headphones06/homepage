import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export function Home(){
  return(
    <div id="container">
      <header>ホームページ</header>
      <div id="item1">
        メニュー
        <nav>
          <ul id="list">
            <li><Link to={"/info"}>自己紹介</Link></li>
            <li><Link to={"/works"}>作品集</Link></li>
            <li>アイテム4</li>
          </ul>
        </nav>
      </div>
      <div id="item2">
        <Link to={"/info"}>自己紹介</Link>
        <p>経歴を記載しています。</p>
      </div>
      <div id="item3">
        <Link to={"/works"}>作品集</Link>
        <p>大小問わず、作品を掲載しています。</p>
      </div>
      <div id="item4">
        アイテム4
      </div>
      <footer> </footer>
    </div>

  );
}