import React from "react";
import { Link } from "react-router-dom";

export function Info(){
  return(
    <div>
      <h1>自己紹介</h1>

      <Link to={"/"}>ホームに戻る</Link>
    </div>
  );
}