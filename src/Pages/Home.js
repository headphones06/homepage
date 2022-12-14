import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../Components/Header";
import { Menu } from "../Components/Menu";
import "../Style/Page.scss";

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
        <h2 className="title">ようこそ</h2>
        <div className="pages">
          <Link to={"/info"} className="link">
            自己紹介
          </Link>
          <p className="pages__info">経歴を記載しています。</p>
        </div>
        <div className="pages">
          <Link to={"/works"} className="link">
            作品集
          </Link>
          <p className="pages__info">大小問わず、作品を掲載しています。</p>
        </div>
        <p className="days">最終更新日　2022年9月26日</p>
      </div>
      <footer>
        <p>HP</p>
      </footer>
    </div>
  );
}
