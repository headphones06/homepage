import React from "react";
//import { Link } from "react-router-dom";
import { Header } from "../Components/Header";
import { Menu } from "../Components/Menu";
import "../Style/Page.scss";
import iconImage from "../Image/icon.png";

export function Info() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="list">
        <h2 className="title">自己紹介</h2>
        <div>
          <p>
            <img src={iconImage} alt="アイコン" height="150" />
            <br />
            1998年6月12日産まれ
            <br />
            始めはCGクリエイターとして働くために活動していた。
            <br />
            現在はフロントエンジニア志望。
            <br />
          </p>
        </div>
      </div>
      <footer> </footer>
    </div>
  );
}
