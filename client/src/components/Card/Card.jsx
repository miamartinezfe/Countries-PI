import React from "react";
import { Link } from "react-router-dom";
import cardStyles from "./card.module.css";

export default function Card({ id, flagImg, name, continent }) {
  return (
    <div className={cardStyles.card}>
      <Link className={cardStyles.Link} to={`/detail/${id}`}>
        <div className={cardStyles.title}>
          <p className={cardStyles.text}>{name} ({continent})</p>
        </div>
      </Link>
      <div className={cardStyles.imgContainer}>
        <img className={cardStyles.img} src={flagImg[1]} alt=""></img>
      </div>
    </div>
  );
}
