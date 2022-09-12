import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css";
import { Header } from "../Components/Header";
import { Menu } from "../Components/Menu";

export function Home() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="list">
        <p className="title">ようこそ</p>
        <div className="item1">
          <Link to={"/info"}>自己紹介</Link>
          <p>経歴を記載しています。</p>
        </div>
        <div className="item2">
          <Link to={"/works"}>作品集</Link>
          <p>大小問わず、作品を掲載しています。</p>
        </div>
      </div>
      <footer> </footer>
    </div>
  );
}
