import React from "react";
import { Link } from "react-router-dom";

export default function Card({id,flagImg,name,continent}) {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <h1>{name}</h1>
      </Link>
      <h2>{continent}</h2>
      <img src={flagImg[0]} alt="" width="150" height="150"></img>
    </div>
  );
}
