import React from "react";
//import { Link } from "react-router-dom";
import { Header } from "../Components/Header";
import { Menu } from "../Components/Menu";
import "../Style/Page.scss";
import workImage1 from "../Image/chara.png";
import workImage2 from "../Image/年賀2021.png";
import workImage3 from "../Image/PlagueDoctor.png";

export function Works() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="list">
        <h2 className="title">作品集</h2>
        <h3 className="title">CG</h3>
        <div className="item">
          <p>
            <img src={workImage1} alt="icon" />
            <br />
            アイコン用に作成した画像
          </p>
        </div>
        <div className="item">
          <p>
            <img src={workImage2} alt="年賀状2021" />
            <br />
            2021年の年賀状に使った作品
          </p>
        </div>
        <div className="item">
          <p>
            <img src={workImage3} alt="pest doctor" />
            <br />
            ポートフォリオに載せるために作成した作品
          </p>
        </div>
      </div>
      <footer> </footer>
    </div>
  );
}
